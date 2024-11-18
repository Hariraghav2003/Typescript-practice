/* generics are used to accept any input type for the class which can be achieved like this */
var stackop = /** @class */ (function () {
    function stackop() {
        this.stack = [];
    }
    stackop.prototype.push = function (item) {
        this.stack.push(item);
    };
    stackop.prototype.pop = function () {
        return this.stack.pop();
    };
    return stackop;
}());
var numberstack = new stackop;
numberstack.push(1);
numberstack.push(2);
numberstack.push(3);
numberstack.pop();
console.log(numberstack);
var stringstack = new stackop;
stringstack.push('hari');
stringstack.push('raghav');
stringstack.pop();
console.log(stringstack);
/*The generics concept is similar to oops polymorphism where one class performs two operations in typescript we implement this concept by using
<T> keyword which means the input can be any type */ 
