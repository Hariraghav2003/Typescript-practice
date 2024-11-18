/* The typescript allows all the datatypes such as integer,object,enum,string array ad objects but assigning a type to the variable are of two types:
implicit type:where the typescript guess the type based on the assigned value;explicit type declaring the variable with the type */
var str="Hari";//Implicit type declaration or Infered type declaration
console.log(typeof str);
// str = 1;// This will return error beacuse the str data type is string

var num:number=10; //Explicit type declaration
console.log(typeof num);
// num= "string";// This will return error beacuse the str data type is number

var arr:number[]=[1,3,4]; //Array type declaration
console.log(arr);
// Including  this there are some special types such as any,undefined,null,unknown

var a:any="hari";//Declaring like this will bypass the strong typing
a=1;