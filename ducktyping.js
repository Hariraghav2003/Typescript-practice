/* Ducktyping in ts means if an object is declared in a structure like this: var object={name:"Hari",id:1} the other declaration for the object variable should be
have same  structure as the intial declaration but the order of the declarations is irrespective */
var obj = { id: 1, name: "Hari" };
obj.name = "Hari";
console.log(obj);
// obj.last="raghav";
// obj={id:1,name:"Hari",last:"raghav"} 
// this will throw error like this Object literal may only specify known properties, and 'last' does not exist in type '{ id: number; name: string; }'. 
// because it's not same as the intial declaration ,if u want to add a property to the object you can achieve that using Record keyword
var aobj = { id: 1, name: "Hari" }; // Using the record keyword we declare that the key can be any string & values can be any datatype 
aobj.last = "raghav"; // Adding new properties dynamically is allowed
aobj = { id: 1, name: "Hari", last: "raghav" }; // Reassigning is also allowed
console.log(aobj);
