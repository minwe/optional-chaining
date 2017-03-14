const user = require('./fixtures');
const assert = require('assert');
const optionalChaining = require('../lib/optional-chaining');

describe('optionalChaining', () => {
  it('should throw if missing parameter', done => {
    assert.throws(() => optionalChaining(), Error);
    assert.throws(() => optionalChaining({}), Error);
    done();
  });

  it('should work with one level', done => {
    const id = optionalChaining(user, 'id');
    const name = optionalChaining(user, 'name');

    assert.strictEqual(id, user.id);
    assert.strictEqual(name, user.name);
    done();
  });

  it('should work with two level', done => {
    const total = optionalChaining(user, 'repos.total');

    assert.strictEqual(total, user.repos.total);
    done();
  });

  it('should work with bracket', done => {
    const total = optionalChaining(user, 'repos[total]');

    assert.strictEqual(total, user.repos.total);
    done();
  });

  it('should work with array', done => {
    const list = optionalChaining(user, 'repos.list');

    assert.equal(list, user.repos.list);
    done();
  });

  it('should work with array item', done => {
    const itemId = optionalChaining(user, 'repos.list[0].id');

    assert.strictEqual(itemId, user.repos.list[0].id);
    done();
  });

  it('should return undefined if property not exist', done => {
    const property = optionalChaining(user, 'xxxxxxx');

    assert.strictEqual(property, undefined);
    done();
  });
});
