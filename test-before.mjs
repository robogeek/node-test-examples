
import {
    describe, it, before, beforeEach, after, afterEach
} from 'node:test';
import * as assert from 'node:assert';

describe('Describe Container', function() {
    before(() => { console.log('IN BEFORE')});
    beforeEach(() => { console.log('IN BEFORE EACH')});

    it('should equal 1 and 1', () => { assert.equal(1, 1); });
    it('should equal 2 and 2', () => { assert.equal(2, 2); });

    after(() => { console.log('IN AFTER')});
    afterEach(() => { console.log('IN AFTER EACH')});
});
