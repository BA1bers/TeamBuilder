// import inquirer package
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtmlTemplate = require('./src/TemplatePage');

// Require Employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

