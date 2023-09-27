export interface User {
    id: String;
    tenBoCauHoi: String;    
}
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  let john = new Person("John", 30);
  console.log(john.greet()); // Hello, my name is john and I'm 30 years old.
  
  
  


