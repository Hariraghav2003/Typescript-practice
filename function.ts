/*In typescript language you can enhance the function by the following concept */

// Restricting the  data type of parameter
function add(a:number, b:number){
    return a + b;
}
console.log(add(2,3));
/*In the above function we perform addition operation but if we give string values it will become a concation so to avoid this we implement strong typing concept
in the parameters by declaring a and b as numbers */

// var err=add("1","2");// This line throws an error that Argument of type 'string' is not assignable to parameter of type 'number'.

// Enhancing the function with optional parameters 
function concation(a:string, b:string,c?:string){
    return a + b + (c || "");
}
console.log(concation("Hello","World")); 
console.log(concation("Hello","World","Typescript"));
/*In the above function we perform concation operation.In this function c is the optional parameter which is represnted using ? means this code can be reused 
for two parameters and three parameters will not show any warning*/

//Enhancing the function with defaut parameters
function concationd(a:string, b:string,c:string="Vanakkam"){
    return a + b + c ;
}
console.log(concationd("Hello","World")); 
console.log(concationd("Hello","World","Typescript"));
/*In the above function we perform concation operation.In this function c is the default parameter which is represnted using = means th value after the = will be 
displayed if we don't pass any any argument to the variable c */