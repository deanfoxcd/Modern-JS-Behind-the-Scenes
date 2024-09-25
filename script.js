'use strict';

/* SCOPING

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output); // This will print the above

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating new variable with same name as one in higher scope (won't change global variable)
      const firstName = 'Steven'; // This firstName will be used in this block because it's seen first

      // Reassigning a variable from a higher scope (will change global variable)
      output = 'NEW OUTPUT';

      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // Not block scoped because of 'var'
    // add() won't be able to be run here in strict mode (which  should always be used)

    console.log(output); // This will print 'NEW OUTPUT'
  }
  printAge();

  return age;
}

const firstName = 'Dean';
calcAge(1991);
*/

/* HOISTING

// console.log(me); // Undefined
// console.log(job); // ReferenceError. Job not initialized. Code breaks
// console.log(year);

var me = 'Dean';
let job = 'Framer';
const year = 1987;

// console.log(addDeclaration(2, 3)); // Will print 5
// console.log(addExpression(3, 4)); // ReferenceError. Variable not initialized. Code breaks
// console.log(addArrow(4, 5)); // Cannot access 'addArrow' before initialization

function addDeclaration(a, b) {
  return a + b;
}
const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example

// Code in function will still execute because 'products' is undefined which is falsey
if (!products) deleteCart();
var products = 10;

function deleteCart() {
  console.log('All products deleted');
}
  */

/*
// 'This' keyword always points to the owner of the function it's used in
// Only assigned when function is called
// Method: this --> Object calling the method
// Simple function call: this = undefined (in strict mode. Otherwise this --> window)
// Arrow funcitons: this = this keyword of surrounding function
// Event listener: this --> DOM element that the handler is attached to

console.log(this); // window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined (doesn't have an owner)
};
calcAge(1987);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window (parent scope)
};
calcAgeArrow(1937);

const dean = {
  year: 1977,
  calcAge: function () {
    // The console.log will print the dean object. Only because that's the
    // object calling the function, not because it's written here
    console.log(this);
    console.log(2037 - this.year);
  },
};
dean.calcAge();

const belle = {
  year: 2017,
};

belle.calcAge = dean.calcAge; // borrows the function
belle.calcAge();
// The console.log(this) in the calcAge function in the dean object will print the Belle object because that's what called it

const f = dean.calcAge;
f(); // this is undefined because there is no onwer, like the first calcAge function
*/

/*
var firstName = 'belle';
// Adding the above will cause the greet function to print 'Hey, belle' because it's
// essentially saying window.firstName

const dean = {
  firstName: 'dean',
  year: 1977,
  calcAge: function () {
    // The console.log will print the dean object. Only because that's the
    // object calling the function, not because it's written here
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // saves 'this' outside of the regular function to be used in the function
    // const isMellenial = function () {
    //   //   console.log(this); // undefined becuase it's in a regular function
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self); // dean object
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMellenial = () => {
      console.log(this); // dean object. Arrow function uses parent scope 'this'
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMellenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
  //   greet: function () {
  //     console.log(this);
  //     console.log(`Hey, ${this.firstName}`);
  //   },
};
dean.greet();
// When using arrow function this prints Hey, undefined. The surrounding function is the global scope. The
// code inside an object literal is not block scoped. Greet is in the global
// scope (window). So it's saying window.firstName which may sometimes be a
// var somewhere else in the global scope in which case that will be printed
// instead of undefined.
// When using normal function it will work as intended and print Hey, dean
dean.calcAge();

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 5);
addExpression(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(3, 4);
*/

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference Types
const belle = {
  firstName: 'Belle',
  lastName: 'Fox',
  age: 27,
};

const marriedBelle = belle; // Doesn't create a new memory address, just referneces the belle memory
marriedBelle.lastName = 'Wilkie';
console.log('Before: ', belle);
console.log('After: ', marriedBelle);
// Both of these will print Belle Wilkie because they're both pointing to the
// same memory reference

// Copying objects the right way
const belle2 = {
  firstName: 'Belle',
  lastName: 'Fox',
  age: 27,
  family: ['dean', 'stacy', 'dan'],
};

const belleCopy = Object.assign({}, belle2); // Only works on first level (shallow copy)
belleCopy.lastName = 'Wilkie';
belleCopy.family.push('madi');
belleCopy.family.push('aislynn');
console.log(belle2);
console.log(belleCopy);
//The two objects will have the same array because the assign method only
// works on the first level
