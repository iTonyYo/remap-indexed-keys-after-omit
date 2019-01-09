const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('.nyc_output'),
  resolveApp('coverage'),

  resolveApp('licenses-development.csv '),
  resolveApp('licenses-production.csv'),
]);
