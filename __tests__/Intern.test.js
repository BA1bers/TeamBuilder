const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')

test('create intern object', () => {
    const intern = new Intern('bob', 14524, 'bob.rocks@gmail.com');
    expect(typeof intern).toBe('object');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("add name and getName method will return an Intern's name", () => {
    const intern = new Intern('bob', 14524, 'bob.rocks@gmail.com');
    expect(intern.getName()).toEqual(expect.any(String));
});

test("add id and getId method will return an Intern's id", () => {
    const intern = new Intern('bob', 14724, 'bob.rocks@gmail.com')
    expect(intern.getId()).toEqual(expect.any(String));
})