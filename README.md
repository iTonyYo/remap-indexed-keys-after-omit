[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4de000aaca86479ab0dcf13622117d31)](https://www.codacy.com/app/swzyocowboy/remap-indexed-keys-after-omit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=iTonyYo/remap-indexed-keys-after-omit&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/iTonyYo/remap-indexed-keys-after-omit.svg?branch=master)](https://travis-ci.org/iTonyYo/remap-indexed-keys-after-omit) [![Coverage Status](https://coveralls.io/repos/github/iTonyYo/remap-indexed-keys-after-omit/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/remap-indexed-keys-after-omit?branch=master) [![dependencies Status](https://david-dm.org/iTonyYo/remap-indexed-keys-after-omit/status.svg)](https://david-dm.org/iTonyYo/remap-indexed-keys-after-omit)

# `@oopsunome/remap-indexed-keys-after-omit`

针对键为 `index-x` 或 `x-index-y` 类似模式的被索引对象，如：

```javascript
{
  '0-0': 'one',
  '1-0': 'two',
  '2-0': 'three',
}
```

可在移除某个键值对后，顺序重新索引所有键。

[`@oopsunome/remap-indexed-keys-after-omit`][@oopsunome/remap-indexed-keys-after-omit] **支持在浏览器以及 Node.js 环境下使用**。Node.js 方面，持续且仅支持最新 LTS 版本的。

## 目录
- [安装](#安装)
- [使用](#使用)
    - [`remapIndexedKeysAfterOmitSync(options)`](#remapindexedkeysafteromitsyncoptions)
    - [`remapIndexedKeysAfterOmit(options)`](#remapindexedkeysafteromitoptions)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## 安装

```shell
# 使用 NPM
$ npm i @oopsunome/remap-indexed-keys-after-omit lodash

# 使用 Yarn
$ yarn add @oopsunome/remap-indexed-keys-after-omit lodash

# 使用 PNPM
$ pnpm install @oopsunome/remap-indexed-keys-after-omit lodash
```

## 使用

#### `remapIndexedKeysAfterOmitSync(options)`

- `options` {Object}
  - `object` {Object} 从小到大索引的对象
  - `omitIndex` {Number} 待删除键值对的索引
  - `keyPattern` {String} 对象的键模式
  - `separator` {String} 分裂键的分隔符
  - `indexPlaceholderInKeyPattern` {String} 指定索引占位
  - `gap` {Number} 递减 / 递增幅度
- 返回: {Object} 被顺序重新索引所有键的对象

```javascript
import { remapIndexedKeysAfterOmitSync } from '@oopsunome/remap-indexed-keys-after-omit';

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
    keyPattern: 'index-x',
    separator: '-',
    indexPlaceholderInKeyPattern: 'index',
    gap: 1,
  });

  console.table(rslt);

  /**
   * 输出:
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

#### `remapIndexedKeysAfterOmit(options)`

- `options` {Object}
  - `object` {Object} 从小到大索引的对象
  - `omitIndex` {Number} 待删除键值对的索引
  - `keyPattern` {String} 对象的键模式
  - `separator` {String} 分裂键的分隔符
  - `indexPlaceholderInKeyPattern` {String} 指定索引占位
  - `gap` {Number} 递减 / 递增幅度
- 返回: {Promise} 被顺序重新索引所有键的对象

```javascript
import { remapIndexedKeysAfterOmit } from '@oopsunome/remap-indexed-keys-after-omit';

(async () => {
  console.table(await remapIndexedKeysAfterOmit({
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
    keyPattern: 'index-x',
    separator: '-',
    indexPlaceholderInKeyPattern: 'index',
    gap: 1,
  }));

  /**
   * 输出:
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

## 参与开发

**准备开发环境**

详细参见 [SETUP.md][SETUP.md]。

**安装依赖**

[`@oopsunome/remap-indexed-keys-after-omit`][@oopsunome/remap-indexed-keys-after-omit] 使用 [`Yarn`][Yarn] 包管理器，执行 `yarn install` 安装依赖。

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

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/manual-sort`][@oopsunome/manual-sort] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [ ] 支持操作 `从大到小索引` 的对象；
- [ ] 为所有的配置提供默认值；
- [X] 支持 `解构` 或 `直接引用` 2 种暴露接口的方式；
- [X] 提供同步、异步 2 种编程方式，异步编程采用 `Promise`；
- [X] 支持构建 `CommonJS`, `AMD`, `ESM`, `UMD` 模式的模块；
- [X] 不将 `lodash` 等库打包；
- [X] 功能测试；
- [X] 捆绑 [Git 倒钩][Git倒钩]；
- [X] ESlint 检测；
- [X] 自动化生成所有依赖的开源证书；
- [X] 使用 [David DM][DavidDM] 实现 `依赖是否最新` 检测；
- [X] 使用 [Travis CI][TravisCI] 实现持续集成；
- [X] 使用 [Coveralls][Coveralls] 可视化测试用例覆盖率；
- [X] 使用 [Codacy][Codacy] 实现代码质量检测；
- [X] 更新日志；
- [ ] 自动化发布；
- [ ] 在什么场景下使用 [`@oopsunome/remap-indexed-keys-after-omit`][@oopsunome/remap-indexed-keys-after-omit]?
- [ ] 编写 [开发环境指南][SETUP.md]；
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想；
- [ ] 文档：维护策略；
- [ ] 文档：[编码风格指南][编码风格指南]；
- [ ] 编写 [发布流程指南][发布流程指南]；
- [ ] 编写 [Git 指南][Git指南]；
- [ ] 编写 [命名指南][命名指南]；
- [ ] 编写 [版本指南][版本指南]；
- [ ] 性能测试；


[编码风格指南]: #
[版本指南]: #
[命名指南]: #
[Git指南]: #
[发布流程指南]: #
[Git倒钩]: https://github.com/typicode/husky
[DavidDM]: https://david-dm.org/
[TravisCI]: https://travis-ci.org/
[Coveralls]: https://coveralls.io/
[Codacy]: https://www.codacy.com/
[@oopsunome/remap-indexed-keys-after-omit]: https://github.com/iTonyYo/remap-indexed-keys-after-omit
[SETUP.md]: #
[Yarn]: https://yarnpkg.com/zh-Hans/
[贡献指南]: https://github.com/iTonyYo/remap-indexed-keys-after-omit/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/remap-indexed-keys-after-omit/blob/master/LICENSE.md
