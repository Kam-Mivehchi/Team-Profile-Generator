const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');



 const teamMembers = [];
//Write your app here
function start(){
    function welcome(){
        console.log('Welcome to Team Profile Generator!!!!')
        inquirer
        .prompt([
            {
                name: 'initiate',
                type: 'list',
                choices: ['Y','N'],
                message:'Would you like to add a new team member?'
            }
        ])
        .then((data)=>{
            if(data.initiate === 'N'){
                return console.log('goodbye')
            }
            else{
                chooseTeamMember();
            }
        });
    };
    welcome();
    function chooseTeamMember(){
        inquirer
        .prompt([
            {
                name: 'addTo',
                type: 'list',
                choices: ['Manager','Engineer', 'Intern'],
                message:'Which team  member would you like to add?'
            }
        ])
        .then((choice)=>{
            switch (choice.addTo){
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
    function addManager(){

        inquirer
            .prompt([
                {
                    name: "ManagerName",
                    type: 'input',
                    message: 'Enter Manager name',
                },
                {
                    name: "ManagerId",
                    type: 'input',
                    message: 'Enter Manager Id',
                },
                {
                    name: "ManagerEmail",
                    type: 'input',
                    message: "Enter Manager's Email",
                },
                {
                    name: "github",
                    type: 'input',
                    message: 'Enter Manager office number'
                }
                
            ])
            .then((answer)=>{
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
    function addEngineer(){

        inquirer
            .prompt([
                {
                    name: "EngineerName",
                    type: 'input',
                    message: 'Enter Engineer name',
                },
                {
                    name: "EngineerId",
                    type: 'input',
                    message: 'Enter Engineer Id',
                },
                {
                    name: "EngineerEmail",
                    type: 'input',
                    message: "Enter Engineer's Email",
                },
                {
                    name: "github",
                    type: 'input',
                    message: "Enter Engineer's Github Link"
                }
                
            ])
            .then((input)=>{
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
    function addIntern(){

        inquirer
            .prompt([
                {
                    name: "InternName",
                    type: 'input',
                    message: 'Enter Intern name',
                },
                {
                    name: "InternId",
                    type: 'input',
                    message: 'Enter Intern Id',
                },
                {
                    name: "InternEmail",
                    type: 'input',
                    message: "Enter Intern's Email",
                },
                {
                    name: "school",
                    type: 'input',
                    message: "Enter Intern's School name"
                }
                
            ])
            .then((userChoice)=>{
                const intern = new Intern(
                    userChoice.EngineerName,
                    userChoice.EngineerId,
                    userChoice.EngineerEmail,
                    userChoice.school
                );
                teamMembers.push(intern);
                welcome();
            });
        }
     
    
}

start();