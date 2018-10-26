"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remapIndexedKeysAfterOmit;

var _lodash = require("lodash");

/**
 * `index-in-key` object,
 * remap object which contain `x-index-y` style key
 *
 * 通过 `key` 删除指定键值对，再重新映射 `key`
 *
 * 重新映射 `key` 需要区分不同位置的数据，
 *   - 首位，完整重新分配
 *   - 当中，仅从删除的数据的下一位开始重新分配
 *   - 末位，无任何操作
 *
 * TODO:
 *
 *   - [ ] 分离 `mapKeys` 部分的逻辑
 *
 * @param {Object} object - 从小到大索引的对象
 * @param {String} indexInKeyPattern - 对象的键模式
 * @param {String} separator - 分裂键的分隔符
 * @param {Number} omitIndex - 指定索引以删除这个位置的键值对
 * @param {String} indexPlaceholder - 指定索引占位
 * @param {Number} gap - 指定递减 / 递增幅度
 */
function remapIndexedKeysAfterOmit(_ref) {
  var object = _ref.object,
      omitIndex = _ref.omitIndex,
      indexInKeyPattern = _ref.indexInKeyPattern,
      separator = _ref.separator,
      indexPlaceholder = _ref.indexPlaceholder,
      gap = _ref.gap;
  return new Promise(function (resolve) {
    // 寻找到 `indexInKeyPattern` 中索引占位符的位置
    var idxPos = (0, _lodash.findIndex)((0, _lodash.split)(indexInKeyPattern, separator), function (item) {
      return (0, _lodash.isEqual)(item, indexPlaceholder);
    }); // 寻找到待删除键值对的键

    var toBeRemoved = (0, _lodash.keys)(object)[omitIndex];
    resolve((0, _lodash.mapKeys)((0, _lodash.omit)(object, [toBeRemoved]), function (val, key) {
      var splitedKey = (0, _lodash.split)(key, separator);
      var rowIdx = +splitedKey[idxPos];

      if (rowIdx > omitIndex) {
        return (0, _lodash.join)((0, _lodash.map)(splitedKey, function (item, i) {
          if ((0, _lodash.isEqual)(i, idxPos)) {
            return rowIdx - gap;
          }

          return item;
        }), separator);
      }

      return key;
    }));
  });
}

module.exports = exports.default;
