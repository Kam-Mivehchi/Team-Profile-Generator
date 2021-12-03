const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//Write your app here
inquirer
.prompt([
    {
        name: "Name",
        type: 'input',
        message: 'Enter Team Member name',
    },
    {
        name: "ID",
        type: 'input',
        message: 'Enter Team Member Id',
    },
    {
        name: "Email",
        type: 'input',
        message: 'Enter Team Member Email',
    },
    {
        name: "Role",
        type: 'input',
        message: 'Enter Team Member Position',
    }
    
])

fs.writeFileSync()