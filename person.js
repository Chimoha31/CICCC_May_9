
console.log(__filename)
console.log(__dirname)

class Person {
  constructor(name, age) {
    this.name= name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello My name is ${this.name}, a ${this.age} year old girl`);
  }
}

module.exports = Person