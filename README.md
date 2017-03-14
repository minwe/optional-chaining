# ES Object Optional Chaining

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: http://img.shields.io/npm/v/object-optional-chaining.svg?style=flat-square
[npm-url]: http://npmjs.org/package/object-optional-chaining
[travis-image]: https://img.shields.io/travis/minwe/optional-chaining.svg?style=flat-square
[travis-url]: https://travis-ci.org/minwe/optional-chaining
[coveralls-image]: https://img.shields.io/coveralls/minwe/optional-chaining.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/minwe/optional-chaining?branch=master

ES5 implements of object optional chaining.

See:

- [ECMAScript proposal for Optional Chaining](https://github.com/claudepache/es-optional-chaining)
- [Swift Optional Chaining](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/OptionalChaining.html)

## Usage

```javascript
import optionalChaining from 'object-optional-chaining';

const user = {
  id: '0001',
  name: 'Minwe',
  repos: {
    total: 5,
    list: [
      { id: '1001', name: 'Repo1' },
      { id: '1002', name: 'Repo2' },
      { id: '1003', name: 'Repo3' },
      { id: '1004', name: 'Repo4' },
      { id: '1005', name: 'Repo5' },
    ],
  },
};

optionalChaining(user, 'name'); // Minwe
optionalChaining(user, 'repos.total'); // 5
optionalChaining(user, 'repos.list'); // array
optionalChaining(user, 'repos.list[0]'); // { id: '1001', name: 'Repo1' }
optionalChaining(user, 'repos.list[0].id'); // 1001
optionalChaining(user, 'repos.notExist'); // undefined
```

## Note

Your environment should support [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

- [es5-shim](https://github.com/es-shims/es5-shim)

## License

MIT © [Minwe](https://github.com/minwe)
