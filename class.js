/*Class is binding the variables and methods*/
var user = /** @class */ (function () {
    function user(firstname, lastname, age) {
        this.Firstname = firstname;
        this.Lastname = lastname;
        this.age = age;
        this.username = firstname + "." + lastname + "@example.com";
    }
    user.prototype.greet = function () {
        return "Hello " + this.Firstname + " " + this.Lastname;
    };
    user.prototype.getAge = function () {
        return this.age;
    };
    user.prototype.getuserid = function () {
        return this.username;
    };
    return user;
}());
var user1 = new user("Hari", "Raghav", 30);
var user2 = new user("Jhon", "mathew", 45);
console.log(user1);
console.log(user2);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user1.getuserid());
