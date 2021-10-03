const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('bob', 4, 'bob.rocks@gmail.com');
    expect(typeof employee).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("employee's name", () => {
    const employee = new Employee('bob', 4, 'bob.rocks@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("employee's id", () => {
    const employee = new Employee('bob', 4, 'bob.rocks@gmail.com')
    expect(employee.getId()) === (expect.any(String));
})

test("employee's email", () => {
    const email = "bob.rocks@gmail.com";    
    const employee = new Employee("bob", 4, email);

    expect(employee.getEmail()).toEqual(email);
});

test("employee's role", () => {
    const employee = new Employee('bob', 4, 'bob.rocks@gmail.com')
    expect(employee.getRole()).toEqual(expect.any(String))
})