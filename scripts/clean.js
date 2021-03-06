const execa = require('execa');

const { resolveApp } = require('./util');
const scriptsDir = resolveApp('scripts');

(async () => {
  await execa('node', [
    `${scriptsDir}/clean-built.js`
  ]);

  await execa('node', [
    `${scriptsDir}/clean-reports.js`
  ]);

  await execa('node', [
    `${scriptsDir}/clean-cache.js`
  ]);
})();
