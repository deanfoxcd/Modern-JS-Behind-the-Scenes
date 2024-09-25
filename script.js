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
