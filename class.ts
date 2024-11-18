/*Class is binding the variables and methods*/
class user{
    Firstname:string;
    Lastname:string;
    age:number;
    username:string;
    constructor(firstname:string, lastname:string, age:number){
        this.Firstname=firstname;
        this.Lastname=lastname;
        this.age=age;
        this.username=firstname + "." + lastname + "@example.com";
    }
    greet(){
        return "Hello " + this.Firstname + " " + this.Lastname;
    }
    getAge(){
        return this.age;
    }
    getuserid(){
        return this.username;
    }
}
let user1=new user("Hari","Raghav",30);
let user2=new user("Jhon","mathew",45);
console.log(user1);
console.log(user2);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user1.getuserid());