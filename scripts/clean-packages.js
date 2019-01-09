const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('yarn.lock'),
  resolveApp('package-lock.json'),

  resolveApp('node_modules'),
])
