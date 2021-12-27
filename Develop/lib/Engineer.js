const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name ,id , email, github){
        super(name,'Engineer',id,email);
        this.github = github;
    }
    getGithub(){
        console.log(`${this.github}`);
        return `${this.github}`;
    }
    getRole(){
        console.log('Engineer');
        return 'Engineer';
    }
    html(){
        `<div>
                <h5 class= 'card-title'>${this.name}</h5>
                <h6 class='card-subtitle'>Engineer<i class='fas fa-used'<h6>
                <ul class ='card-text'>
                <li>ID: ${this.id}</li>
                <li>Github: ${this.github}</li>
                <li class - 'text-white'><a href ='mailto:${this.email}?submit'>
                <i class = 'fas fa-paper-plane'></i>Email
                </a></li>
                </ul>
            </div>
        </div>`
    }

}

const employees = [{name:'Kamyar', id: 1, email:'kam@mail.com', github:'git'}]

module.exports = Engineer;
