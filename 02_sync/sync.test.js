const Lodash = require('./sync');

describe('Lodash: compact', ()=>{
    let _ = new Lodash();
    let array;

    beforeEach(()=>{
        array = ['', 0, '', 42, 'Hello', false, true, null];
    });

    afterAll(()=>{
        _ = new Lodash();
    });

    test('should be editable', ()=>{
        array.push(...['one', 'two']);
        expect(array).toContain('one');
        expect(array).toContain('two');
    });

    test('should be defined', ()=>{
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });

    test('should remove falsy values from array', ()=>{
        const result = [42, 'Hello', true];
        expect(_.compact(array)).toEqual(result);
    });

    test('should not contain falsy values', ()=>{
        expect(_.compact(array)).not.toContain('');
        expect(_.compact(array)).not.toContain(0);
        expect(_.compact(array)).not.toContain(false);
        expect(_.compact(array)).not.toContain(null);
    })
});