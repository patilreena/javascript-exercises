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