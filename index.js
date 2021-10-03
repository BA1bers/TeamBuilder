// import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtmlTemplate = require('./src/TemplatePage');

// Require Employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const inputEngineer = () => [
    {
        type: "input",
        message: "enter a engineer's name",
        name: "name",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter engineer's id",
        name: "id",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter engineer's email",
        name: "email",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter engineer's github",
        name: "github",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
];

const inputIntern = () => [
    {
        type: "input",
        message: "enter a intern's name",
        name: "name",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter intern's id",
        name: "id",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter intern's email",
        name: "email",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter intern's school",
        name: "school",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    }
];


const inputManager = () => [
    {
        type: "input",
        message: "enter a manager's name",
        name: "name",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter manager's id",
        name: "id",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter manager's email",
        name: "email",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "enter manager's office number",
        name: "office number",
        validate: (addInput) => {
            if (addInput) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
];

const addTeamMember = [
    {
        type: "list",
        message: "Add an additonal Team member?",
        name: "addTeamMember",
        choices: [
            "Add another Engineer?",
            "Add another Intern?",
            "Are you Finished adding Team members?",
        ],
    },
];

function askQuestions() {
    prompt(inputManager).then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        teamArry.push(manager);
        addEmployees();
    });
}

function addEngineer() {
    prompt(inputEngineer).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArry.push(engineer);
        return addEmployees();
    });
}

function addIntern() {
    prompt(inputIntern).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamArry.push(intern);
        return addEmployees();
    });
}

function addEmployees() {
    prompt(addTeamMember).then((data) => {
        if (data.addTeamMember === "Add another Engineer?") {
            addEngineer();
        } else if (data.addTeamMember === "Add another Intern?") {
            addIntern();
        } else {
            console.log(teamArry);
            const employeeHTML =
                initHtml();

            const writeHTML = createHtml(employeeHTML);
            writeFile("./dist/index.html", writeHTML);
            fs.copyFileSync("./dist/style.css");
        }
    });
}

askQuestions();

module.exports = [employees]