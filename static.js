/* Static is a keyword  through which we can access a function inside a class through the class nby without creating a object for the class */
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.checkage = function (age) {
        return age >= 18;
    };
    return user;
}());
user.checkage(20);
/* Static property is similar to static concept but here we define a property as static */
var userdb = /** @class */ (function () {
    function userdb(name) {
        this.name = name;
        userdb.totaluser++;
    }
    userdb.totaluser = 0;
    return userdb;
}());
var username = new userdb("hari");
var username2 = new userdb("raghav");
console.log(userdb.totaluser); // this will print 1 because we have only created one object of userdb class
