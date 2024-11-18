/* Static is a keyword  through which we can access a function inside a class through the class nby without creating a object for the class */
class user{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    static checkage(age:number){//this function check age can be called without creating an object for the class user but it can't access objects
        return age>=18;
    }
}
user.checkage(20);

/* Static property is similar to static concept but here we define a property as static */
class userdb{
    name:string;
    static totaluser:number=0;
    constructor(name:string){
        this.name=name;
        userdb.totaluser++;
    }

}
let username=new userdb("hari");
let username2=new userdb("raghav");
console.log(userdb.totaluser); // this will print 1 because we have only created one object of userdb class