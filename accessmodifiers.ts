/*Accessmodifiers are used to restrict the access of the variable in a class there are three types of modifiers,
->private:if a variable or function is declared as private it can be accessed only inside the class
->protected:if a variable or function is declared as protected it can be accessed inside the class and in it's child classes
->public:if a variable or function is declared as public it can be accessed globally
 */
class employee{
    protected name: string; //Here the varible name can be accessed only in child and parent class
    private id: number;//Here the varible id can be accessed only in this class
    private email:string;
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
class role extends employee{ 
    role: string;
    constructor(name: string, id: number,email: string,role: string){
        super(name, id, email);
        this.role=role;
    }
    getRole(){
        return "Hello " + this.name + "your role is:"+this.role;
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
