/* The typescript allows all the datatypes such as integer,object,enum,string array ad objects but assigning a type to the variable are of two types:
implicit type:where the typescript guess the type based on the assigned value;explicit type declaring the variable with the type */
var str = "Hari"; //Implicit type declaration
console.log(typeof str);
// str = 1;// This will return error beacuse the str data type is string
var num = 10; //Explicit type declaration
console.log(typeof num);
// num= "string";// This will return error beacuse the str data type is number
// Including  this there are some special types such as any,undefined,null,unknown
