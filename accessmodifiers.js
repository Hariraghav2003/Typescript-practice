var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Accessmodifiers are used to restrict the acess of the variable in a class there are three types of modifiers,
->private:if a variable or function is declared as private it can be accessed only inside the class
->protected:if a variable or function is declared as protected it can be accessed inside the class and in it's child classes
->public:if a variable or function is declared as public it can be accessed globally
 */
var employee = /** @class */ (function () {
    function employee(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    employee.prototype.greet = function () {
        return "Hello " + this.name;
    };
    employee.prototype.getdetails = function () {
        return "your details:".concat(this.name, " ").concat(this.id, " ").concat(this.email);
    };
    return employee;
}());
var role = /** @class */ (function (_super) {
    __extends(role, _super);
    function role(name, id, email, role) {
        var _this = _super.call(this, name, id, email) || this;
        _this.role = role;
        return _this;
    }
    role.prototype.getRole = function () {
        return "Hello " + this.name + "your role is:" + this.role;
    };
    return role;
}(employee));
var emp = new role("John Doe", 123456, "john@example.com", "Software Engineer");
//if we create an object for the role (child class) we can also access the employee (parent class)
var emp2 = new role("John mathew", 1234459, "mathew@example.com", "HR");
console.log(emp2.greet());
console.log(emp2.getdetails());
console.log(emp2.getRole());
console.log(emp2.greet());
console.log(emp2.getdetails());
console.log(emp2.getRole());
