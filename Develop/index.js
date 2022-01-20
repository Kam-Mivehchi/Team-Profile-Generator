const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const WEB_DIR = path.resolve(__dirname, 'webpage');
const htmlPath = path.join(WEB_DIR, '../index.html');

const makeTeam = require('./template');
const teamMembers = [];
//Write your app here
function start() {

    // welcome function handled app initiation as well as the means to make the cli continous
    function welcome() {
        console.log('Welcome to Team Profile Generator!!!!');
        console.log(teamMembers);
        inquirer
            .prompt([
                {
                    name: 'initiate',
                    type: 'list',
                    choices: ['Y', 'N'],
                    message: 'Would you like to add a new team member?'
                }
            ])
            .then((data) => {
                if (data.initiate === 'N') {
                    function createHTML() {

                        fs.writeFileSync(htmlPath, makeTeam(teamMembers), 'utf-8');
                    }



                    createHTML();
                    return console.log('goodbye');
                }
                else {
                    chooseTeamMember();
                }
            });

    };
    welcome();
    function chooseTeamMember() {
        inquirer
            .prompt([
                {
                    name: 'addTo',
                    type: 'list',
                    choices: ['Manager', 'Engineer', 'Intern'],
                    message: 'Which team  member would you like to add?'
                }
            ])
            .then((choice) => {
                switch (choice.addTo) {
                    case 'Manager':
                        addManager();
                        break;
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;

                }
            });
    };



    //fs.writeFileSync("./index.html", writePage());
    function addManager() {

        inquirer
            .prompt([
                {
                    name: "ManagerName",
                    type: 'input',
                    message: 'Enter Manager name',
                    validate:(answer)=>{
                        if(answer!==""){
                            return true;
                        }else{
                            return 'Please Enter at Least one Character'
                        }
                    }
                },
                {
                    name: "ManagerId",
                    type: 'input',
                    message: 'Enter Manager Id',
                    validate:(answer)=>{
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }else{
                            return 'Please Enter a valid id (1-9)'
                        }
                    }
                },
                {
                    name: "ManagerEmail",
                    type: 'input',
                    message: "Enter Manager's Email",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                          return true;
                        }
                        return 'Please enter a valid email address.';
                      },
            
                },
                {
                    name: "github",
                    type: 'input',
                    message: 'Enter Manager office number',
                    validate:(answer)=>{
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }else{
                            return 'Please Enter a valid office number (1-9)'
                        }
                    }
            
            
                }

            ])
            .then((answer) => {
                const manager = new Manager(
                    answer.ManagerName,
                    answer.ManagerId,
                    answer.ManagerEmail,
                    answer.github
                );
                teamMembers.push(manager);

                welcome();
            });
    }
    function addEngineer() {

        inquirer
            .prompt([
                {
                    name: "EngineerName",
                    type: 'input',
                    message: 'Enter Engineer name',
                    validate:(answer)=>{
                        if(answer!==""){
                            return true;
                        }else{
                            return 'Please Enter at Least one Character'
                        }
                    }
                },
                {
                    name: "EngineerId",
                    type: 'input',
                    message: 'Enter Engineer Id',
                    validate:(answer)=>{
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }else{
                            return 'Please Enter a valid id (1-9)'
                        }
                    }
                },
                {
                    name: "EngineerEmail",
                    type: 'input',
                    message: "Enter Engineer's Email",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                          return true;
                        }
                        return 'Please enter a valid email address.';
                      },
                },
                {
                    name: "github",
                    type: 'input',
                    message: "Enter Engineer's Github Link"
                }

            ])
            .then((input) => {
                const engineer = new Engineer(
                    input.EngineerName,
                    input.EngineerId,
                    input.EngineerEmail,
                    input.github
                );
                teamMembers.push(engineer);
                welcome();
            });
    }
    function addIntern() {

        inquirer
            .prompt([
                {
                    name: "InternName",
                    type: 'input',
                    message: 'Enter Intern name',
                    validate:(answer)=>{
                        if(answer!==""){
                            return true;
                        }else{
                            return 'Please Enter at Least one Character'
                        }
                    }
                },
                {
                    name: "InternId",
                    type: 'input',
                    message: 'Enter Intern Id',
                    validate:(answer)=>{
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }else{
                            return 'Please Enter a valid id (1-9)'
                        }
                    }
                },
                {
                    name: "InternEmail",
                    type: 'input',
                    message: "Enter Intern's Email",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                          return true;
                        }
                        return 'Please enter a valid email address.';
                      },
                },
                {
                    name: "school",
                    type: 'input',
                    message: "Enter Intern's School name",
                    validate:(answer)=>{
                        if(answer!==""){
                            return true;
                        }else{
                            return 'Please Enter at Least one Character'
                        }
                    }
                }

            ])
            .then((userChoice) => {
                const intern = new Intern(
                    userChoice.InternName,
                    userChoice.InternId,
                    userChoice.InternEmail,
                    userChoice.school
                );
                teamMembers.push(intern);
                welcome();
                console.log()
            });
    }


}

start();
