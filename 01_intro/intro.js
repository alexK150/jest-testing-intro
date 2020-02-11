function expect(value) {
    return {
        toBe: exp => {
            if (exp === value) {
                console.log('Success') ;
            } else {
                console.error('Fail');
            }
        }
    }
}
// expect(sum(41, 2)).toBe(42);

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull};