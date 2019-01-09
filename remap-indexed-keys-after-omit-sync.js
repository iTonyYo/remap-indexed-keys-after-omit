import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import omit from 'lodash/omit';
import mapKeys from 'lodash/mapKeys';
import split from 'lodash/split';
import findIndex from 'lodash/findIndex';
import join from 'lodash/join';
import keys from 'lodash/keys';

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
export default function remapIndexedKeysAfterOmitSync({
  object,
  omitIndex,
  keyPattern,
  separator,
  indexPlaceholderInKeyPattern,
  gap,
}) {
  // 寻找到 `keyPattern` 中索引占位符的位置
  const idxPos = findIndex(
    split(keyPattern, separator),
    item => isEqual(item, indexPlaceholderInKeyPattern),
  );

  // 寻找到待删除键值对的键
  const toBeRemoved = keys(object)[omitIndex];

  return mapKeys(
    omit(
      object,
      [toBeRemoved],
    ),
    (val, key) => {
      const splitedKey = split(key, separator);
      const rowIdx = +splitedKey[idxPos];

      if (rowIdx > omitIndex) {
        return join(
          map(splitedKey, (item, i) => {
            if (isEqual(i, idxPos)) {
              return rowIdx - gap;
            }

            return item;
          }),
          separator,
        );
      }

      return key;
    },
  );
}
