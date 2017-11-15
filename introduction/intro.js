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
let knowsJavascript = false;

if (knowsJavascript && userName) {
	console.log('Hi' + userName + 'start doing revision')
}
else if(knowsJavascript) {
	console.log(userName + 'lets strat reading')
}

else if(userName) {
	console.log('Hi' + userName + 'welcome to JavaScript tutorial')
}
else {
	console.log('try again later')

}


//  if/else Statements

// "If something is true, let's do option 1, or else, if it is false, let's do option 2."

let javaScript = true;
if (javaScript == true) {
	console.log('you are master in JavaScript');
} else {
	console.log('start learning JavaScript')
}

// True and False Values

let wordCount = false

if(wordCount) {
	console.log('Great!');
} else {
	console.log('Not Great!');
}

let javaScript1 = true;
 if (!javaScript1) {
 	console.log('true')
 } else {
 	console.log('false');
 }


 // Comparison Operators

 let hungerLevel = 10
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}


// else if Statements

let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if(moonPhase === 'mostly full'){
   console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase')
}

// Logical Operators

let name = false;
let lname = false;

if (name === false && lname === false) {
	console.log('my name is');
} else if(name === false) {
	console.log('reena')
} else if(lname ===false) {
	console.log('giri')
} else {
	console.log('dummi');
}

let color = 'green';
let danger = false;

if( color === 'green' && danger === false) {
	console.log('a');
} else {
	console.log('b');
}



//switch statements

let friendName = 'sara';

switch (friendName) {
	case 'kevin':
	console.log('nooooo');
	break;

	case 'james':
	console.log('no');
	break;

	case 'sara':
	console.log('yesssss');
	break;

	default:
	console.log('invalid');
	break;

}

// Functions

//A function is a block of code designed to perform a task.

//The beauty of functions is that they allow us to write a block of code once, then we can reuse it 
//over and over without rewriting the same code.

// Length of a string


const length = (name) => {
	
	return name.length;
}
console.log(length('code'));


// program to check if the parameter is number or not

const number = ( input ) => {
    return !isNaN( input );
}

console.log(number(99)); 

// Write a function to calculate sum of an array

const sum = [1,2,3,4].reduce((a,b) => a + b, 0);
console.log(sum);

//write a function to calculate find a value in array
  
// 		let array = [1,2,3,4,5];
// const value = array.find(x => x.number === 5);
// const index = array.indexOf(value) > -1;
// array.fill(value.number = 5, index, index++);

//Write a function to add two numbers

const add = (number1, number2) => {
   console.log(number1 + number2);
}
add(5,50);

// A simple function to check wheather the calculator is on or off

let calculatorIsOn = false;

const powerbutton = () => {
	if(calculatorIsOn) {
		console.log('on');
		calculatorIsOn = false;
	} else {
		console.log('off');
		calculatorIsOn = true;
	}
}

powerbutton();


//write a JavaScript program to take pizza orders

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
}

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

console.log(getSubTotal(orderCount));

console.log(getTotal());


//Function declaration

function plus(num1, num2) {
	return num1 + num2;
}
console.log(plus(9,9));


//Function expression

const addnum = (num1,num2) => {
	return num1+num2;
}
console.log(addnum(5,5));


//Arrow Functions

const multiply = number => number * number;
console.log(multiply(10,10));





