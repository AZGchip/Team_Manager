// To Do: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    // if no argument is defined, default 
    getRole(role){
       if (role === undefined || role === null){
           role = "Employee";
           return role
       }
       else{
           return role
       }
    }
}
module.exports = Employee