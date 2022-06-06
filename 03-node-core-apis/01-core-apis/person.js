// function(exports, require, module, __filename, __dirname){ ..your module here..}

console.log(__filename);
console.log(__dirname);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}, and my age is ${this.age}`);
  }
}

/*
======== exporting multiple modules ========

class Car {...}
module.exports = { Person, Car }
const { Car, Person } = require('.....')

//or export as a function
exports.Person = function(){}
exports.Car = function(){}

*/
