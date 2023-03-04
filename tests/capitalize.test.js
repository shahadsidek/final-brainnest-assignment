const { capitalize } = require('../src/capitalize');

describe('capitalize', () => {
    it('capitalizes the first character of a single word string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('capitalizes the first character of a multi-word string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    it('returns an empty string when passed an empty string', () => {
        expect(capitalize('')).toBe('');
    });
});
