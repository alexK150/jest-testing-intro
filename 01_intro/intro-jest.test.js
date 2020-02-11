const {sum, nativeNull} = require('./intro');

describe('Sum function testing', ()=>{
    test('should return sum of numbers', ()=>{
        expect(sum(3, 1)).toBe(4)
    });

    test('should return correctly comparing number to others', ()=>{
        expect(sum(1, 4)).toBeGreaterThan(4);
        expect(sum(1, 4)).toBeGreaterThanOrEqual(5);
        expect(sum(1, 4)).toBeLessThan(6);
        expect(sum(1, 4)).toBeLessThanOrEqual(5)
    });

    test('should sum floats correctly', ()=>{
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
});

describe('NativeNull function testing', ()=>{
    test('should return false value or null', ()=>{
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    })
});
