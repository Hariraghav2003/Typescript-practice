var persondata = "{\"name\":\"hari\",\"id\":102,\"age\":21}";
var typecast = JSON.parse(persondata); //Here we convert the JSON data type into object type  using the typecasting
console.log(typecast.name, typecast.id, typecast.age);
//type assertion is used to assert the type of a value at compile time or we can update the value of HTML element
var str = "hari";
var strLength = str.length; //Here we are type casting the string to number using type assertion
console.log(strLength);
var a = {
    name: "hari",
    id: 102,
    age: 21,
    role: "admin"
};
console.log(a);
