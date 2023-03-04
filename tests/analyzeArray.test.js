const { analyzeArray } = require('../src/analyzeArray');

describe('analyzeArray', () => {
    it('calculates average, min, max, and length of a non-empty array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    it('throws an error for an empty array', () => {
        expect(() => analyzeArray([])).toThrowError('Array is empty');
    });

    it('throws an error for non-array input', () => {
        expect(() => analyzeArray('not an array')).toThrowError('Input is not an array');
    });
});
