const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')

test('create intern object', () => {
    const intern = new Intern('dan', 2, 'dan.theman@gmail.com');
    expect(typeof intern).toBe('object');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("intern's name", () => {
    const intern = new Intern('dan', 2, 'dan.theman@gmail.com');
    expect(intern.getName()).toEqual(expect.any(String));
});

test("intern's id", () => {
    const intern = new Intern('dan', 2, 'dan.theman@gmail.com')
    expect(intern.getId()) === (expect.any(String));
})

test("interns's email", () => {
    const email = 'dan.theman@gmail.com';    
    const intern = new Intern('carl', 2, email);

    expect(intern.getEmail()).toEqual(email);
});

test("school", () => {
    const school = "Intern";
    const intern = new Intern('dan', 2, 'dan.theman@gmail.com', school);
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("role", () => 
{
    const role = "Intern";
    const intern = new Intern('dan', 2, 'dan.theman@gmail.com', role)
    expect(intern.getRole() === (role));
})