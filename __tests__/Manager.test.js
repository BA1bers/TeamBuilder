const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('bob', 14524, 'bob.rocks@gmail.com');
    expect(typeof manager).toBe('object');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("add name amd getName method will return an manager's name", () => {
    const manager = new Manager('bob', 14524, 'bob.rocks@gmail.com');
    expect(manager.getName()).toEqual(expect.any(String));
});

test("add id and getId method will return an manager's id", () => {
    const manager = new Manager('bob', 14724, 'bob.rocks@gmail.com')
    expect(manager.getId()).toEqual(expect.any(String));
})