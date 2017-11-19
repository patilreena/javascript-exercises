//Control flow statements enable JavaScript programs to make decisions by executing code based on a condition.
// If a given condition is true, we execute one block of code. If the statement is false, 
//we execute another block of code.

let userName = 'Jamie';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
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
//exclamation point (!). We can use this in conditional statements as shorthand to check if the value of a
// variable evaluates to false rather than true.

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

// Use a single = to assign a value to a variable. Use === to compare the values of two different variables.

let moonPhase = "full";
if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf');
}

// else if statements

let moon = "mostly full";
if (moon === 'full') {
  console.log('Howl!');
} else if (moon === 'mostly full') {
 console.log('Arms and legs are getting hairier');
} else if (moon === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// A simple if else if program

let Name = 'smith';
let knowsJavascript = false;

if (knowsJavascript && Name) {
  console.log('Hi' + Name + 'start doing revision')
} else if(knowsJavascript) {
  console.log(Name + 'lets strat reading')
} else if(Name) {
  console.log('Hi' +" " + Name + " " + 'welcome to JavaScript tutorial')
} else {
  console.log('try again later')
}

// logical operators

let Phase = "full";
let isFoggyNight = false;
if (Phase === 'full' && isFoggyNight === true) {
  console.log('Howl!');
} else if (Phase === 'mostly full') {
 console.log('Arms and legs are getting hairier');
} else if (Phase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// switch statements

let sunPhase = "mostly full";

switch(sunPhase) {
  case 'full':
  console.log('Howl!');
    break;
  case 'mostly full':
  console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
  console.log('Back on two feet');
    break;
  default:
   console.log('Invalid moon phase');
    break;
  }

// ternary operator
// shorten simple if/else statements called the ternary operator.

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');





let arr = [{name: "reena"}, {name: "Girish"}, {name: "Annapoorna"}];
const x = arr.find((item) => {
  return item.name === 'Annapoorna';
});

console.log(x);



arr = arr.map((item) => {
  item.city = 'Sydney';
  return item;
});


//“Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the
// number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five 
//print “FizzBuzz”.


for (var z = 1; z <= 100; z++) {
  if (z % 3 && z % 5) {
    console.log("FizzBuzz");
  } else (z % 3); {
    console.log("Fizz");
  } {
    console.log("Buzz");
  }
}






