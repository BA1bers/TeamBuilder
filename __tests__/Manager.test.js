const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('carl', 1, 'carl.wheezer@gmail.com');
    expect(typeof manager).toBe('object');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("manager's name", () => {
    const manager = new Manager('carl', 1, 'carl.wheezer@gmail.com');
    expect(manager.getName()).toEqual(expect.any(String));
});

test("manager's id", () => {
    const manager = new Manager('carl', 1, 'carl.wheezer@gmail.com')
    expect(manager.getId()).toEqual(expect.any(String));
})

test("managers's email", () => {
    const email = 'carl.wheezer@gmail.com';    
    const manager = new Manager('carl', 1, email);

    expect(manager.getEmail()).toEqual(email);
});

test("manager's office number", () => {
    const manager = new Manager('carl', 1, 'carl.wheezer@gmail.com');
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("manager's role", () => {
    const testValue = "Manager";
    const manager = new Manager('carl', 1, 'carl.wheezer@gmail.com');
    expect(manager.getRole()).toEqual(testValue);
})