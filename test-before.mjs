
import {
    describe, it, before, beforeEach, after, afterEach
} from 'node:test';
import * as assert from 'node:assert';

let did_before = false;
let did_before_each = 0;
let did_after = false;
let did_after_each = 0;

function print_status(stage) {
    console.log(`${stage}: before ${did_before} before_each ${did_before_each} after ${did_after} after_each ${did_after_each}`);
}

describe('Describe Container', function() {
    before(() => {
        did_before = true;
        print_status('BEFORE');
        // console.log('IN BEFORE');
    });
    beforeEach(() => {
        did_before_each++;
        print_status('BEFORE EACH');
        // console.log('IN BEFORE EACH');
    });

    after(() => {
        did_after = true;
        print_status('AFTER');
        // console.log('IN AFTER');
    });
    afterEach(() => {
        did_after_each++;
        print_status('AFTER EACH');
        // console.log('IN AFTER EACH');
    });

    it('should equal 1 and 1', () => {
        console.log('1 and 1');
        assert.equal(1, 1);
        // assert.equal(did_before, false);
        // assert.equal(did_before_each > 1, true);
    });
    it('should equal 2 and 2', () => {
        console.log('2 and 2');
        assert.equal(2, 2);
        assert.equal(did_after, false);
        // assert.equal(did_after_each > 1, true);
    });

});

print_status('FINISH');