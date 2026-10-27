import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { validateFiles } from './static-policy.mjs';

const root = process.cwd();
const output = path.join(root, 'dist/static');
await fs.rm(output, { recursive: true, force: true });
await fs.cp(path.join(root, 'dist/client'), output, { recursive: true });
const module = await import(pathToFileURL(path.join(root, 'dist/server/index.mjs')).href);
const entry = module.default ?? module;
const context = { waitUntil() {}, passThroughOnException() {}, props: {} };
const origin = 'http://localhost';
const pending = ['/'];
const visited = new Set();
let posts;
while (pending.length) {
  const route = pending.shift();
  if (visited.has(route)) continue;
  visited.add(route);
  const response = await entry.fetch(new Request(origin + route), {}, context);
  if (!response.ok) throw new Error(`Static render failed: ${route} [${response.status}]`);
  const html = await response.text();
  if (!html.includes('<html')) throw new Error(`Missing page HTML: ${route}`);
  const destination = path.join(output, route, 'index.html');
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, html);
  for (const match of html.matchAll(/<a[^>]+href=["']([^"']+)["']/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), origin);
    if (url.origin !== origin || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) continue;
    const next = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
    if (!visited.has(next)) pending.push(next);
  }
}
// Browser navigation reads the same published articles as the rendered pages.
const blogResponse = await entry.fetch(new Request(origin + '/blog'), {}, context);
if (!blogResponse.ok) throw new Error('Blog render failed');
// The server loader also exports a JSON snapshot during static rendering.
posts = globalThis.__UMOYA_STATIC_POSTS;
if (!Array.isArray(posts) || !posts.length) throw new Error('No published Wix posts exported');
await fs.writeFile(path.join(output, 'blog-data.json'), JSON.stringify(posts));
for (const name of await fs.readdir(path.join(root, 'src/assets'))) {
  if (!name.endsWith('.asset.json')) continue;
  const asset = JSON.parse(await fs.readFile(path.join(root, 'src/assets', name), 'utf8'));
  const response = await fetch(new URL(asset.url, 'https://www.umoya.care'));
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`Missing media: ${name}`);
  const destination = path.join(output, asset.url);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, Buffer.from(await response.arrayBuffer()));
}
const files = [];
async function walk(directory) {
  for (const item of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, item.name);
    if (item.isDirectory()) await walk(absolute);
    else files.push({ name: path.relative(output, absolute).split(path.sep).join('/'), content: await fs.readFile(absolute) });
  }
}
await walk(output);
validateFiles(files, [process.env.LOVABLE_API_KEY, process.env.WIX_API_KEY, process.env.WIX_CLI_API_KEY]);
console.log(`Static export verified: ${visited.size} pages, ${posts.length} articles, ${files.length} files`);