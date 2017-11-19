// Functions
//A function is a block of code designed to perform a task.
//The beauty of functions is that they allow us to write a block of code once, then we can reuse it 
//over and over without rewriting the same code.

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

// length method

const len = (value) => {
  return value.length;
};
console.log(len("reena"));

//forEach method

let names = ["sara","kevin","james","jon"];
let arr =[]; 

names.forEach((name) => {
	arr.push(`my name is ${names}`);
	});
console.log(arr);

//map method

let items = ["mango","apple","orange","grapes"];

items = items.map((value) => {
   return ` i like ${value} `;
});

console.log(items);

// filter

let words = ["chair","table","laptop",99,11];

let numbers =  words.filter((word) => {
	return typeof word === "number";
});

console.log(numbers);



