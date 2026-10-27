import { promises as fs } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { SITE_ID, validateFiles } from './static-policy.mjs';

const apiKey = process.env.WIX_CLI_API_KEY;
if (!apiKey) throw new Error('Missing GitHub Actions secret WIX_CLI_API_KEY');
const files = [];
const output = path.resolve('dist/static');
async function walk(directory) {
  for (const item of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, item.name);
    if (item.isDirectory()) await walk(absolute);
    else files.push({ name: path.relative(output, absolute).split(path.sep).join('/'), content: await fs.readFile(absolute) });
  }
}
await walk(output);
validateFiles(files, [apiKey, process.env.LOVABLE_API_KEY, process.env.WIX_API_KEY]);
// Never forward CLI output: it may contain authentication details.
function cli(args) {
  try { return execFileSync('npx', ['--yes', '@wix/cli@1.2.2', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim(); }
  catch { throw new Error('Wix CLI authentication failed; check the protected API key and permissions'); }
}
cli(['login', '--api-key', apiKey]);
const token = cli(['token']);
if (!token || /\s/.test(token)) throw new Error('Wix CLI did not return a single access token');
// Verify the serving frontend before replacing it; never create a site.
const base = `https://www.wixapis.com/headless-business-setup/v1/headless-business/${SITE_ID}`;
const headers = { Authorization: `Bearer ${token}` };
const current = await fetch(`${base}/files`, { headers });
if (!current.ok) throw new Error(`Cannot verify existing static deployment [${current.status}]; upload refused`);
const form = new FormData();
for (const file of files) form.append('files', new Blob([file.content]), file.name);
const response = await fetch(`${base}/drop?campaign=mcp&agent=github-actions`, { method: 'POST', headers, body: form });
if (!response.ok) throw new Error(`Wix static upload failed [${response.status}]; inspect Wix dashboard`);
const result = await response.json();
if (!result.uploadId || !result.siteUrl) throw new Error('Wix did not confirm publication');
const live = await fetch(result.siteUrl);
if (!live.ok || !(await live.text()).includes('uMoya')) throw new Error('Upload accepted but live verification failed');
console.log(`Complete static build published: ${files.length} files. Live site verified.`);