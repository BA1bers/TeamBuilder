const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const engineer = new Engineer('bob', 14524, 'bob.rocks@gmail.com');
    expect(typeof engineer).toBe('object');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("add name and getName method will return an engineer's name", () => {
    const engineer = new Engineer('bob', 14524, 'bob.rocks@gmail.com');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("add id and getId method will return an Engineer's id", () => {
    const engineer = new engineer('bob', 14724, 'bob.rocks@gmail.com')
    expect(engineer.getId()).toEqual(expect.any(String));
})