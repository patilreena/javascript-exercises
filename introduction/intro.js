// The console.log() command is used to print, or log, text to the console.

console.log('Hello');  // In this example, Hello! is logged to the console. 


// Data Types

//strings - Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes 
// or double quotes is a string.

console.log('JavaScript');


// Numbers — Any number, including numbers with decimals:

console.log(9);

// Booleans — Either true or false, with no quotations

console.log(true);

// Null — Can only be null. It represents the absence of value.

console.log(null);


// Math Operators

// Add

console.log(10 + 20);

//Subtract

console.log(30 - 10);

//Multiply

console.log(9 * 9);

//Divide

console.log( 100 / 10);

//Properties

console.log('javascript'.length);

// Built-in Methods

console.log('javascript'.toUpperCase());

console.log('        javascript     '.trim());  // remove the whitespace at the beginning and end of the statement

//libraries

console.log(Math.random() * 50);

console.log(Math.floor(Math.random() * 50));

// Math.random generates a random number between 0 and 1.
// then multiply that number by 50, so now it displays random number between 0 and 50.
// Then, Math.floor rounds the number down to the nearest whole number.


// Math.ceil() returns the smallest integer greater than or equal to a decimal number.

console.log(Math.ceil(43.8));

// Number.isInteger()checks if a number is an integer.

console.log(Number.isInteger(99));

// A simple if else if program

let userName = 'smith';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

