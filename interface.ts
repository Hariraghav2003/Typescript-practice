/* Interfaces are a method which can be called anywhere in the code this concept is used to simplfy the code if there is a object data type that is needed to passed
in two or more functions but of one function needs two object values but another needs three object value  in normal scenarios we can to define in each functions
but in interfaces we define it once and use it anywhere */
let User={Firstname: 'John', Lastname:'Mathew', Email:'john@gmail.com',Age:35};
interface userdetails{
    Firstname: string;
    Lastname: string;
    Email?: string;
    Age?: number;
}
/* This interface makes the code simpler but a problem is if we have declare another user2 object with firstname and lastname it will show error 
if we pass to the function while using this interface to avoid this problem we can use optional parameter in the interface*/

function greet(user:userdetails) {
    return"Hello " + user.Firstname + " " + user.Lastname;
}
function agedisp(user:userdetails) {
    return "Your age is: " + user.Age;
}

console.log(greet(User));
console.log(agedisp(User));
