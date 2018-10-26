'use strict';

import { assert } from 'chai';
import { size } from 'lodash';

// 使用 `require` 关键字
const remapIndexedKeysAfterOmitSync
  = require('./remap-indexed-keys-after-omit-sync');

describe('source sync', function() {
  it('尺寸', () => {
    assert.equal(
      size(remapIndexedKeysAfterOmitSync({
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
        gap: 1,
      })),

      10
    );
  });
});
