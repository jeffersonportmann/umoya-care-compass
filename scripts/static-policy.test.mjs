import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SITE_ID, validateFiles } from './static-policy.mjs';

test('deployment is restricted to the existing uMoya headless site', () => {
  assert.equal(SITE_ID, '7a8b2ad9-d1ec-4930-a76d-e38cc7f1f4f1');
});
test('secret values cannot be uploaded in frontend files', () => {
  assert.throws(() => validateFiles([{ name: 'index.html', content: Buffer.from('test-private-value') }], ['test-private-value']));
});
test('server and environment files are excluded from static deployment', () => {
  for (const name of ['server/index.mjs', '.env', '../secret']) {
    assert.throws(() => validateFiles([{ name: 'index.html', content: Buffer.from('page') }, { name, content: Buffer.from('x') }]));
  }
});
test('a complete frontend includes the root page and nested assets', () => {
  assert.throws(() => validateFiles([{ name: 'assets/app.js', content: Buffer.from('x') }]));
  assert.doesNotThrow(() => validateFiles([{ name: 'index.html', content: Buffer.from('page') }, { name: 'assets/app.js', content: Buffer.from('x') }]));
});