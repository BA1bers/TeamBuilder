const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const engineer = new Engineer('joe', 3, 'joe.jenkins@gmail.com');
    expect(typeof engineer).toBe('object');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("engineer's name", () => {
    const engineer = new Engineer('joe', 3, 'joe.jenkins@gmail.com');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("engineer's email", () => {
    const engineer = new Engineer('joe', 3, 'joe.jenkins@gmail.com')
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("engineer's github", () => {
    const engineer = new Engineer('joe', 3, 'joe.jenkins@gmail.com')
    expect(engineer.getGitHub()) === (expect.any(String))
});

test("engineer's id", () => {
    const engineer = new Engineer('joe', 3, 'joe.jenkins@gmail.com')
    expect(engineer.getId()) === (expect.any(String));
})

test("getrole", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("joe", 3, "joe.jenkins@gmail.com", testValue);
    expect(engineer.getRole()).toEqual(testValue);
})

