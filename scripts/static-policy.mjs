import path from 'node:path';

export const SITE_ID = '7a8b2ad9-d1ec-4930-a76d-e38cc7f1f4f1';

export function validateFiles(files, secrets = []) {
  if (!files.some((file) => file.name === 'index.html')) throw new Error('Missing root index.html');
  for (const file of files) {
    const name = file.name;
    if (path.posix.isAbsolute(name) || name.split('/').includes('..') || /(^|\/)(\.env[^/]*|node_modules|server|\.git)(\/|$)/.test(name)) {
      throw new Error(`Unsafe static path: ${name}`);
    }
    for (const secret of secrets.filter(Boolean)) {
      if (file.content.includes(Buffer.from(secret))) throw new Error('A secret was found in the static output; upload refused');
    }
  }
}