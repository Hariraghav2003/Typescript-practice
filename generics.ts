/* generics are used to accept any input type for the class which can be achieved like this */
//Here the stackop class is used to accept any input type using <T>
class stackop<T>{
    private stack: T[]=[];
    push(item:T){
        this.stack.push(item);
    }
    pop(){
        return this.stack.pop();
    }

}
const numberstack=new stackop<number>;
numberstack.push(1);
numberstack.push(2);
numberstack.push(3);
numberstack.pop();
console.log(numberstack);
const stringstack=new stackop<string>;
stringstack.push('hari');
stringstack.push('raghav');
stringstack.pop();
console.log(stringstack);

/*The generics concept is similar to oops polymorphism where one class performs two operations in typescript we implement this concept by using
<T> keyword which means the input can be any type */