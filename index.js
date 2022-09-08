const inquirer = require('inquirer');


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
      name: 'office number',
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
      message: "Enter the Engineers's employee email address"
   },
   {
      type: 'input',
      name: 'github',
      message: "Enter the Engineers's Github username(**USERNAME ONLY** Do not include 'https://www.github.com/'):"
   },
]



//function to initialize inquirer


function init() {
   inquirer.prompt(managerPrompt)
      .then((answers) => {

         inquirer.prompt(menu).then((answers) => {
            switch (answers.options) {
               case "Add an Engineer":
                  inquirer.prompt(engineerPrompt).then((answers) => {

                  });
                  break;
               case "Add an Intern":

                  inquirer.prompt(internPrompt).then((answers) => {

                  });
                  break;
               default:

                  //Generate the HTMl end the app
                  return "Goodbye"
            }
         })
      }
      )
}

init()