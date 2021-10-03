const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('bob', 14524, 'bob.rocks@gmail.com');
    expect(typeof employee).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("add name and getName method will return an employee's name", () => {
    const employee = new Employee('bob', 14524, 'bob.rocks@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("add id and getId method will return an employee's id", () => {
    const employee = new Employee('bob', 14724, 'bob.rocks@gmail.com')
    expect(employee.getId()).toEqual(expect.any(String));
})