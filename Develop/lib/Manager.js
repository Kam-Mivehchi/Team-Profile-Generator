const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email, officeNumber){
        super(name,'Manager',id,email);
        this.officeNumber =officeNumber;
    }
    getOfficeNumber(){
        console.log(`${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole(){
        console.log('Manager');
        return 'Manager';
    }
    html(){
        return `
        <div>
        <h5 class= 'card-title'>${this.name}</h5>
        <h6 class='card-subtitle'>Manager<i class='fas fa-user-tie'></i>
        <ul class ='card-text'>
        <li>ID: ${this.id}</li>
        <li>Office Number: ${this.officeNumber}</li>
        <li class - 'text-white'><a href ='mailto:${this.email}?submit= Feedback&body = Message'>
        <i class = 'fas fa-paper-plane'></i>Email
        </a></li>
        </ul>
        </div>
        </div>
        `
    }
    

}

module.exports = Manager;
