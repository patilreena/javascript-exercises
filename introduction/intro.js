// The console.log() command is used to print, or log, text to the console.

console.log('Hello');  // In this example, Hello! is logged to the console. 

// Data Types

//strings - Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes 
// or double quotes is a string.

console.log('JavaScript');

// string interpolation in EX5  

let e = "trent";
let w = "code";
console.log(e + w);

// string interpolation in EX6

let fname = "Sara";
let mname = "smith";
console.log(`${fname} ${mname}`);

//string method - includes

let str = "javascript";
let y = str.includes("j");
console.log(y);

// string method - charAt()

let char = "HTML";
console.log(char.charAt(2));

// string method - replace

let rep = "javaaa";
console.log(rep.replace("j","k"));

// string method substr - it includes first and last number

let sub = "learning javascript";
console.log(sub.substr(0,4));

// string method - length

let len = "react";
console.log(len.length); 

// string method - endswith

let end = "wonder";
console.log(end.endsWith("r"));


// string method - startswith

let star = "women";
console.log(star.startsWith("m"));
// converting number to string

let num = 100;
console.log(String(num));

// converting string to number

let text = "mango";
console.log(Number(text));


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
	console.log('aaaaaa')
} else if(lname ===false) {
	console.log('bbbbbb')
} else {
	console.log('cccccc');
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


// Global scope

const firstName = 'sara';
const lastName = 'Hyland';

const user = () => {
	return 'My name is' + ' '+ firstName + ' , ' + 'my lastName is' + ' ' + lastName;
}

console.log(user());


//Difference between const and let

const a = 'abc';
const b = 'def';
let c = 'xyz';

const diff = () => {
	let c = 'moon'
	return 'difference is' + ' ' + a + ' ' + b + ' ' + c;
};

console.log(diff());


//Block scope

// const visibleLightWaves = () => {
// 	let lightWaves = 'Moonlight';
// 	console.log(lightWaves());
// }
// visibleLightWaves();
// console.log(lightWaves());

//create an array

let newYearsResolutions = ['Get in shape ',' Improve your concentration and mental skills',' Meet new people']
console.log(newYearsResolutions);


// Array property access

let newYearsResolution = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

console.log(newYearsResolution);

const listItem = newYearsResolution[0];
console.log(listItem);
console.log(newYearsResolution[3]);


// update array elements

let seasons = ['winter','summer','spring','rainy'];
seasons[3] = 'autumn';
console.log(seasons);
console.log(seasons.length);


// .push() allows us to add items to the end of an array. 

const numbers = ['one','two','three']
numbers.push('four','five');
console.log(numbers);




// .shift() method removes last item of an array. 

const birds = ['owl','parrot','gulls','crow'];
birds.shift();
console.log(birds);



// .unshift() method add first item of an array.

const animals = ['tiger','lion','camel','gorila'];
animals.unshift('dog');
console.log(animals);


// The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at,
// but does not include, the given end argument.

const juice = ['Apple Juice','Blackberry Juice','Carrot','cherry juice'];
console.log(juice.slice(1,3));

//The pop method removes the last element from an array

const movies = ['Beauty and the Beast','The Fate of the Furious','Wonder Woman','Guardians of the Galaxy Vol. 2'];
movies.pop();
console.log(movies);


//for loop

let vacationSpots = ['Bali', 'India', 'Nepal'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//nested for loops

const p = [1,2,3,4];
const q = [1,5,6,7];

for (let px = 0; px < p.length; px++) {
	for (let qx = 0; qx < b.length; qx++) {
		if(p[px] === q[qx]) {
			console.log('match' + p[px]);
		}
	}
}


//while loop

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';

while( currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);


//iterators
// forEach method

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});


// map method

let squares = [1, 2, 3, 4, 5];

let squareNumbers = squares.map(function(square) {
  return square * square;
});

console.log(squareNumbers);


// filter method


let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


// some method

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some(function(word) {
  return word.length < 6;
}));


// every method

let interestingWords = ['unique','quell','lucid','ken','karma'];

console.log(interestingWords.every(word => word.length > 5));

// objects

//object creation

const person = {
  name: 'selly',
  age: 25
}

console.log(person);

// Accessing Object properties using dot notation

const girl = {
  name: 'selly',
  age: 25
}

console.log(girl.name);
console.log(girl.age);

// Accessing Object properties using [ ] symbol

const boy = {
  name: 'kevin',
  age: 25
}

console.log(boy['name']);
console.log(boy['age']);

// A simple alarm program to set the alarm on weekend and weekdays

let women = {
  name: 'sara',
  age: 25,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

//this method
  sayHello: function() {
   return `Hello, my name is ${this.name}`;  // use yield method to print the return statement dont use single ampersand
  }, 

  // writing method inside the object

  sayBye :() => {
     return 'bye';
  },

// writing method inside the object using ES6
  sayGoodbye() {
  	return 'Goodbye!';
  }
  
};

console.log(women.sayHello());

console.log(women['name']);
console.log(women['age']);

const day = 'Thursday';
let alarm;

if(day === 'saturday' || day === 'sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(women[alarm]);

women.hobbies = ['reading'];

console.log(women.hobbies);

women.hobbies = ['dancing'];

console.log(women.hobbies);



const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: function() {
    if (this.hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.'
    } else {
      return 'Unlock the door, then flip the open sign.'
    }
  }
}

console.log(restaurant.openRestaurant());




let dance = {
	name:'bollywood',
	age: 24,
	lname: 'hollywood',

	ohhh: () => {
		return 'ohhhhhh';
	}
};
console.log(dance.ohhh());







