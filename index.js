const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const GenerateHTML = require('./GenerateHTML')
let team = []

const managerPrompt = [
   {
      type: 'input',
      name: "name",
      message: "Enter the Manager's Name"
   },
   {
      type: 'input',
      name: 'id',
      message: "Enter the Manager's employee ID"
   },
   {
      type: 'input',
      name: 'email',
      message: "Enter the Manager's email address"
   },
   {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the Manager's office number"
   },

]
const menu = [
   {
      type: 'list',
      name: "options",
      message: "Would you like to add another employee to your team?",
      choices: ["Add an Engineer", "Add an Intern", "Quit and Create HTML"]
   },
]
const engineerPrompt = [
   {
      type: 'input',
      name: "name",
      message: "Enter the Engineers's Name"
   },
   {
      type: 'input',
      name: 'id',
      message: "Enter the Engineers's employee ID"
   },
   {
      type: 'input',
      name: 'email',
      message: "Enter the Engineers's email address"
   },
   {
      type: 'input',
      name: 'github',
      message: "Enter the Engineers's Github username(**USERNAME ONLY** Do not include 'https://www.github.com/'):"
   },
]
const internPrompt = [
   {
      type: 'input',
      name: "name",
      message: "Enter the Intern's Name"
   },
   {
      type: 'input',
      name: 'id',
      message: "Enter the Intern's employee ID"
   },
   {
      type: 'input',
      name: 'email',
      message: "Enter the Intern's employee email address"
   },
   {
      type: 'input',
      name: 'github',
      message: "Enter the Intern's School:"
   },
]



//function to initialize inquirer
function displayMenu() {
   inquirer.prompt(menu).then((answers) => {
      switch (answers.options) {
         case "Add an Engineer":
            inquirer.prompt(engineerPrompt).then((answers) => {
               let { name, id, email, github } = answers
               const engineer = new Engineer(name, id, email, github)
               team.push(engineer)
               displayMenu()

            });
            break;
         case "Add an Intern":

            inquirer.prompt(internPrompt).then((answers) => {
               let { name, id, email, school } = answers
               const intern = new Intern(name, id, email, school)
               team.push(intern)
               displayMenu()

            });
            break;
         default:

            //Generate the HTMl end the app

            return createTeamPage(team)
      }

   }
   )


}

function createTeamPage(team) {
   const directory = path.resolve(__dirname, 'dist');
   if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory)
   }
   fs.writeFileSync(path.join(directory, 'team.html'), GenerateHTML(team), "utf-8")
}

function init() {
   inquirer.prompt(managerPrompt)
      .then((answers) => {
         let { name, id, email, officeNumber } = answers
         const manager = new Manager(name, id, email, officeNumber)
         team.push(manager)
         displayMenu()
      })
}

init()