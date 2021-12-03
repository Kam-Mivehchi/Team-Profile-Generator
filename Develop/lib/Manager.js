const Employee = require("./Employee");

class Manager extends Employee {
    constructor(role){
        super('Manager',id,email);
        this.role =role;
    }
    getOfficeNumber(){
        console.log(`${this.role}`);
        return `${this.role}`;
    }

    getRole(){
        console.log('Manager');
        return 'Manager';
    }
    

}

module.exports = Manager;
