/*Some special types in typescript are type casting,type assertion,type intersection*/
//type casting is converting or customizing the data type based on the needs using interface
interface TypeCast{
    name: string;
    id:number;
    age:number;
}
let persondata=`{"name":"hari","id":102,"age":21}`;
let typecast=JSON.parse(persondata) as TypeCast;//Here we convert the JSON data type into object type  using the typecasting
console.log(typecast.name,typecast.id,typecast.age);

//type assertion is used to assert the type of a value at compile time or we can update the value of HTML element

let str="hari";
let strLength:number=str.length as number; //Here we are type casting the string to number using type assertion
console.log(strLength);

//type intersection is used to combine multiple types into a single type
interface employee{
    name: string;
    id:number;
    age:number;
}
 interface admin{
    role: string;
 }
type administrator=employee & admin //combining the employee and admin typesinto a single type and creating a new administrator type
let a:administrator={
    name:"hari",
    id:102,
    age:21,
    role:"admin"
}
console.log (a);
