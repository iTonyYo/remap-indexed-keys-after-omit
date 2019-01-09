const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('remap-indexed-keys-after-omit.tar'),

  resolveApp('esm.js'),
  resolveApp('esm-sync.js'),

  resolveApp('umd.js'),
  resolveApp('umd-sync.js'),
]);
