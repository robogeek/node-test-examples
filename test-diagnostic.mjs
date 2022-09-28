

import { test } from 'node:test';
import * as assert from 'node:assert';

test('Describe Container', async function(t) {

    t.beforeEach((t) => {
        t.diagnostic(`DIAG before ${t.name}`);
    });

    t.afterEach((t) => {
        t.diagnostic(`DIAG after ${t.name}`);
    });

    await t.test('should equal 1 and 1', () => { 
        t.diagnostic(`SUCCEED TEST #1`);
        assert.equal(1, 1); });
    await t.test('should equal 2 and 2', () => { assert.equal(2, 2); });
    await t.test('should FAIL equal 1 and 3', (t) => {
        t.diagnostic(`In FAIL test ${t.name}`);
        assert.equal(1, 3); 
    });

});


