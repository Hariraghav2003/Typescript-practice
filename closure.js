/*closure is  the Encapsulation Oops concept which is the binding the variabes and methods in a single container*/
function count() {
    var c = 0;
    return {
        increment: function () {
            c++;
            console.log(c);
        }
    };
}
var counter = count();
counter.increment();
counter.increment();
var counter2 = count(); //for this the c will be 0 because it reuses the same function as a new function
counter2.increment();
/*In this example a function count is encapsulated with a variable and a function to perform the increment operation */ 
