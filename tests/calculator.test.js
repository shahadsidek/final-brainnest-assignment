const { calculator } = require('../src/calculator');

describe('calculator', () => {
    describe('add', () => {
        it('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('adds a positive number and a negative number', () => {
            expect(calculator.add(2, -3)).toBe(-1);
        });

        it('adds two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        it('subtracts two positive numbers', () => {
            expect(calculator.subtract(3, 2)).toBe(1);
        });

        it('subtracts a positive number and a negative number', () => {
            expect(calculator.subtract(3, -2)).toBe(5);
        });

        it('subtracts two negative numbers', () => {
            expect(calculator.subtract(-3, -2)).toBe(-1);
        });
    });

    describe('divide', () => {
        it('divides a positive number by a positive number', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        });

        it('divides a negative number by a positive number', () => {
            expect(calculator.divide(-6, 3)).toBe(-2);
        });

        it('throws an error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrowError('Cannot divide by zero');
        });
    });

    describe('multiply', () => {
        it('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        it('multiplies a positive number and a negative number', () => {
            expect(calculator.multiply(2, -3)).toBe(-6);
        });

        it('multiplies two negative numbers', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });
    });
});
