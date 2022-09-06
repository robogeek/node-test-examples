
import test from 'node:test';
import * as assert from 'node:assert';

test('simple-test', function() {
    assert.strictEqual(1, 1);
});

test('fail-test', function() {
    assert.strictEqual(1, 2);
});

test('async test', async () => {
    let result = await new Promise((resolve, reject) => {
        setImmediate(() => {
          resolve(1);
        });
    });
    assert.strictEqual(1, result);
});

/* test('test container', () => {
    test('test 1', () => { assert.equal(1, 1); });
    test('test 2', () => { assert.equal(2, 2); });
});

test('SKIP', { skip: true }, () => { assert.equal(1, 1); }); */
