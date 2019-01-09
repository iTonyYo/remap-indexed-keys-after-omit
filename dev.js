require('@babel/register')();

const remapIndexedKeysAfterOmitSync
  = require('./remap-indexed-keys-after-omit-sync');

const remapIndexedKeysAfterOmit
  = require('./remap-indexed-keys-after-omit');

function printSync() {
  console.log(`> sync`);

  console.log(remapIndexedKeysAfterOmitSync({
    object: {
      '0-0': 254,
      '1-0': 7892,
      '2-0': 67568,
      '3-0': 23,
      '4-0': 657,
      '5-0': 3245,
      '6-0': 789,
      '7-0': 234,
      '8-0': 456,
      '9-0': 675,
      '10-0': 596,
    },
    omitIndex: 9,
    indexInKeyPattern: 'index-x',
    separator: '-',
    indexPlaceholder: 'index',
    gap: 1
  }));
}

function printAsync() {
  console.log(`\n> async`);

  remapIndexedKeysAfterOmit({
    object: {
      '0-0': 254,
      '1-0': 7892,
      '2-0': 67568,
      '3-0': 23,
      '4-0': 657,
      '5-0': 3245,
      '6-0': 789,
      '7-0': 234,
      '8-0': 456,
      '9-0': 675,
      '10-0': 596,
    },
    omitIndex: 9,
    indexInKeyPattern: 'index-x',
    separator: '-',
    indexPlaceholder: 'index',
    gap: 1
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    throw err;
  });
}

module.exports = (function() {
  printSync();
  printAsync();
})();
