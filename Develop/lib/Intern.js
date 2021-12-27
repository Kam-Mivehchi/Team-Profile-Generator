const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super (name,'Intern', id, email);
        this.school = school;
    }

    getSchool(){
        console.log(`${this.school}`);
        return `${this.school}`;
    }
    
    
    getRole(){
        console.log('Intern');
        return 'Intern';
    }
    html(){
        return `
        <div>
        <h5 class= 'card-title'>${this.name}</h5>
        <h6 class='card-subtitle'>Intern<i class='fas fa-used'
        <ul class ='card-text'>
        <li>ID: ${this.id}</li>
        <li>School: ${this.school}</li>
        <li class - 'text-white'><a href ='mailto:${this.email}?submit'>
        <i class = 'fas fa-paper-plane'></i>Email
        </a></li>
        </ul>
        </div>
        </div>
        `
    }
}

module.exports = Intern;
