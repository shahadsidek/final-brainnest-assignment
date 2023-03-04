const { reverseString } = require('../src/reverseString');

describe('reverseString', () => {
    it('reverses a string with an odd number of characters', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('reverses a string with an even number of characters', () => {
        expect(reverseString('world')).toBe('dlrow');
    });

    it('returns an empty string when passed an empty string', () => {
        expect(reverseString('')).toBe('');
    });
});
