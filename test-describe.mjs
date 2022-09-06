
import { describe, it } from 'node:test';
import * as assert from 'node:assert';

describe('Describe Container', function() {

    it('should equal 1 and 1', () => { assert.equal(1, 1); });
    it('should equal 2 and 2', () => { assert.equal(2, 2); });
    it('should FAIL equal 1 and 3', () => { assert.equal(1, 3); });
});

