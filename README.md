# `remapIndexedKeysAfterOmit()`

针对键为 `index-x` 或 `x-index-y` 类似模式的被索引对象，如：

```javascript
{
  '0-0': 'one',
  '1-0': 'two',
  '2-0': 'three',
}
```

可在移除某个键值对后，顺序重新索引所有键。

## 目录

- [`remapIndexedKeysAfterOmitSync()`](#remapindexedkeysafteromitsync)
- [`remapIndexedKeysAfterOmit()`](#remapindexedkeysafteromit)
- [配置](#配置)
- [参与开发](#参与开发)
- [待办](#待办)

## `remapIndexedKeysAfterOmitSync()`

> 同步编程

```javascript
const { remapIndexedKeysAfterOmitSync }
  = require('remap-indexed-keys-after-omit-sync');

// import { remapIndexedKeysAfterOmitSync } from 'remap-indexed-keys-after-omit-sync';

(function() {
  const rslt = remapIndexedKeysAfterOmitSync({
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
  });

  console.log(rslt);

  /**
   * rslt:
   * 
   * {
   *   '0-0': 254,
   *   '1-0': 7892,
   *   '2-0': 67568,
   *   '3-0': 23,
   *   '4-0': 657,
   *   '5-0': 3245,
   *   '6-0': 789,
   *   '7-0': 234,
   *   '8-0': 456,
   *   '9-0': 596,
   * }
   */
})();
```

## `remapIndexedKeysAfterOmit()`

> 通过 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 实现异步编程

```javascript
const { remapIndexedKeysAfterOmit }
  = require('remap-indexed-keys-after-omit');

// import { remapIndexedKeysAfterOmit } from 'remap-indexed-keys-after-omit';

(async () => {
  console.log(await remapIndexedKeysAfterOmit({
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
  }));

  /**
   * rslt:
   * 
   * {
   *   '0-0': 254,
   *   '1-0': 7892,
   *   '2-0': 67568,
   *   '3-0': 23,
   *   '4-0': 657,
   *   '5-0': 3245,
   *   '6-0': 789,
   *   '7-0': 234,
   *   '8-0': 456,
   *   '9-0': 596,
   * }
   */
})();
```
  
## 配置

- [X] **`indexPlaceholder`**，支持自定义索引占位符；

- [X] **`gap`**，支持自定义递减/递增幅度；

- [X] **`object`**，支持传入 `从小到大索引` 的对象；

- [ ] **`object`**，支持传入 `从大到小索引` 的对象；

- [X] **`omitIndex`**，指定索引以删除这个位置的键值对；

- [X] **`separator`**，分裂键的分隔符；

- [X] **`indexInKeyPattern`**，对象的键模式；

## 参与开发

**准备开发环境**

详细参见 [SETUP.md]()。

**安装依赖**

[`remap-indexed-keys-after-omit`]() 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

**开始开发**

```shell
yarn start
```

**生产构建**

```shell
yarn build
```

**测试**

```shell
yarn test
```

## 待办

- [X] 支持 `解构` 或 `直接引用` 2 种暴露接口的方式；

- [X] 提供同步、异步 2 种编程方式，异步编程采用 `Promise`；

- [X] 支持构建 `CommonJS`, `AMD`, `ESM`, `UMD` 模式的模块；

- [X] 不将 `lodash` 等库打包；

- [X] 功能测试；

- [ ] 性能测试；

- [ ] 捆绑 [Git 倒钩](https://github.com/typicode/husky)；

- [X] ESlint 检测；

- [X] 自动化生成所有依赖的开源证书；

- [ ] 自动化发布；

- [ ] 借助 [David DM](https://david-dm.org/) 实现依赖检测；

- [ ] 借助 [Travis CI](https://travis-ci.org/) 实现持续集成；

- [ ] 借助 [Coveralls](https://coveralls.io/) 可视化测试用例覆盖率；

- [ ] 借助 [Codacy](https://www.codacy.com/) 实现代码质量检测；

- [ ] 编写 [`SETUP.md`]()；
