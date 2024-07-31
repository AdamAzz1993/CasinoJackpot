const { JackpotRoll } = require('../src/models');
const { 
    rollJackpot,
    getCheatChance,
    roll,
    allSame,
    getRandomSymbol,
 } = require('../src/services');

jest.mock('../src/constants', () => ({
    POSSIBLE_SYMBOLS: ['C', 'L', 'O', 'W'],
    CREDIT_RANGE: {
        moderate: 40,
        high: 60
    },
    CHEAT_CHANCE: {
        moderate: 0.3,
        high: 0.6
    },
    WIN_AMOUNT: {
        'C': 10,
        'L': 20,
        'O': 30,
        'W': 40
    }
}));

jest.mock('../src/models', () => ({
    JackpotRoll: jest.fn()
}));

describe('rollJackpot', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(Math, 'random').mockReturnValue(0); // Ensures deterministic behavior
    });

    afterEach(() => {
        Math.random.mockRestore();
    });

    test('should call the correct model constructor', () => {
        jest.spyOn(global.Math, 'random')
            .mockReturnValueOnce(0.1) // First roll
            .mockReturnValueOnce(0.1) // Cheat chance not triggered
            .mockReturnValueOnce(0.1) // First roll

        rollJackpot(10);

        expect(JackpotRoll).toHaveBeenCalled();
    });

    test('should return cheat chance based on credits', () => {
        expect(getCheatChance(10)).toBe(0);
        expect(getCheatChance(50)).toBe(0.3);
        expect(getCheatChance(70)).toBe(0.6);
    });
});

describe('roll function', () => {
    beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0); // Always select the first symbol
    });
    afterEach(() => {
        Math.random.mockRestore();
    });
    test('should return an array of 3 symbols', () => {
        const result = roll();
        expect(result).toEqual(['C', 'C', 'C']);
    });
});

describe('allSame function', () => {
    test('should return true if all elements are the same', () => {
        expect(allSame(['C', 'C', 'C'])).toBe(true);
    });
    test('should return false if not all elements are the same', () => {
        expect(allSame(['C', 'L', 'C'])).toBe(false);
    });
});

describe('getRandomSymbol function', () => {
    beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0.5); // Selects 'O' based on the mock
    });
    afterEach(() => {
        Math.random.mockRestore();
    });
    test('should return a random symbol', () => {
        expect(getRandomSymbol()).toBe('O');
    });
});

