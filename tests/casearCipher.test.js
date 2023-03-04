const { caesarCipher } = require('../src/casearCipher');

describe('caesarCipher', () => {
    it('encrypts a string with a positive shift', () => {
        expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
    });

    it('encrypts a string with a negative shift', () => {
        expect(caesarCipher('hello world', -3)).toBe('ebiil tloia');
    });

    it('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    it('keeps the same case', () => {
        expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
    });

    it('handles non-alphabetic characters', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});
