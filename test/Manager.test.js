const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Set office number via constructor argument', () => {
    const testVal = 100;
    const e = new manager('Ricky', 1, 'ricky@doge.com', testVal);
    expect(e.officenumber).toBe(testVal);
})