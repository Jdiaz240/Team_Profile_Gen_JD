const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Begin the instance of employee', () = {
        const e = new Employee();
        expect(new Employee(e)).toBe('object');
    });

    it('Can set a name with the constructor arguments', () => {
        const name = 'rocket';
        const e =new Employee(name);
        expect(e.name).toBe(name);
    })
})