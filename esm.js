"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remapIndexedKeysAfterOmit;

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _map = _interopRequireDefault(require("lodash/map"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _split = _interopRequireDefault(require("lodash/split"));

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _join = _interopRequireDefault(require("lodash/join"));

var _keys = _interopRequireDefault(require("lodash/keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @param {String} keyPattern - 对象的键模式
 * @param {String} separator - 分裂键的分隔符
 * @param {Number} omitIndex - 指定索引以删除这个位置的键值对
 * @param {String} indexPlaceholderInKeyPattern - 指定索引占位
 * @param {Number} gap - 指定递减 / 递增幅度
 */
function remapIndexedKeysAfterOmit(_ref) {
  var object = _ref.object,
      omitIndex = _ref.omitIndex,
      keyPattern = _ref.keyPattern,
      separator = _ref.separator,
      indexPlaceholderInKeyPattern = _ref.indexPlaceholderInKeyPattern,
      gap = _ref.gap;
  return new Promise(function (resolve) {
    // 寻找到 `keyPattern` 中索引占位符的位置
    var idxPos = (0, _findIndex.default)((0, _split.default)(keyPattern, separator), function (item) {
      return (0, _isEqual.default)(item, indexPlaceholderInKeyPattern);
    }); // 寻找到待删除键值对的键

    var toBeRemoved = (0, _keys.default)(object)[omitIndex];
    resolve((0, _mapKeys.default)((0, _omit.default)(object, [toBeRemoved]), function (val, key) {
      var splitedKey = (0, _split.default)(key, separator);
      var rowIdx = +splitedKey[idxPos];

      if (rowIdx > omitIndex) {
        return (0, _join.default)((0, _map.default)(splitedKey, function (item, i) {
          if ((0, _isEqual.default)(i, idxPos)) {
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
