const { forEach } = require("lodash")

function renderCustomField(role, member) {
   switch (role) {
      case "Manager":
         return `<p class="card-subtitle">Office Number: <span>${member.getOfficeNumber()}</span></p>`
      case "Engineer":
         return `<p class="card-subtitle">Github Username: <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></span></p>`
      case "Intern":
         return `<p class="card-subtitle">School: <span>${member.getSchool()}</span></p>`
   }
}
function renderCards(teamArray) {
   let content = ""
   teamArray.forEach(function (member, i) {
      content += `<div class="card ${member.getRole()}" id="card${i}"  >
<div class="card-body">
 <h5 class="card-title text-center">${member.getRole()}</h5 >
 <p class="card-subtitle">Name: <span>${member.getName()}</span></p>
 <p class="card-subtitle">ID: <span>${member.getId()}</span></p>
 <p class="card-subtitle">Email: <span><a target="_blank" rel="noopener noreferrer" href="mailto:${member.getEmail()}">${member.getEmail()}</a></span></p>
 ${renderCustomField(member.getRole(), member)} 
</div >
</div>

${member.getRole() === 'Manager' ? `  <div class="break"></div>` : ""}

`
   })

   return content
}
module.exports = function GenerateHTML(teamArray) {
   console.log(teamArray)

   //render the first one at the top of a list with manager info then the rest will be under the manager info



   return `<!DOCTYPE html>
      <html lang="en">
         <head>
            <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
                     <link rel="stylesheet" href="./style.css">
                     

                        <title>Team Profile Generator</title>
                     </head>
                     <body>
                        ${renderCards(teamArray)}
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
                     </body>
                  </html>`

}