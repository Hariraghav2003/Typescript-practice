/*Inheritance is extending the properties of class to another class which helps to avoid code duplication */
class employee{
    name: string;
    id: number;
    email:string;
    constructor (name: string, id: number,email: string){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    greet(){
        return "Hello " + this.name;
    }
    getdetails(){
        return `your details:${this.name} ${this.id} ${this.email}`;
    }
}
class role extends employee{ //extends keyword is used to extend the properties of the employee class
    role: string;
    constructor(name: string, id: number,email: string,role: string){
        super(name, id, email);//super keyword is used to call the parent constructor
        this.role=role;
    }
    getRole(){
        return "your role is:"+this.role;
    }
}

let emp=new role("John Doe",123456,"john@example.com","Software Engineer"); 
//if we create an object for the role (child class) we can also access the employee (parent class)
let emp2=new role("John mathew",1234459,"mathew@example.com","HR");
console.log(emp2.greet());
console.log(emp2.getdetails());
console.log(emp2.getRole());
console.log(emp2.greet());
console.log(emp2.getdetails());
console.log(emp2.getRole());
