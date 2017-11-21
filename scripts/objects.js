const person = {
	name: "james",
	age: 25
}
console.log(person.name);

let numbers = [1,2,3,4,5];

const value = numbers.map((item) => {
  return item * 5;
});
console.log(value);

let day = 25;
let month = "december";
let date = new Date(2017, 11, 25);


console.log(`christmas is on ${date}`);


let movies = {
	name:"Forest Gump", 
	year:1994
}


console.log(movies.name);


let films = [{name:"Forest", year:2000}, {name:"Gump", year:1999}];
console.log(films[0].name,films[0].year);

// const movie = films((value) => {
//   return value.name;
// });


let name = "Reena";
let lastName = "Patil";

const details = function(name,lastName) {
	return `Hello my name is ${name} ${lastName}`;
}

console.log(details(name,lastName));





let fruits = [{
		name:"apple",
		color:"red",
		taste : ["sweet", "bitter", "sour"],
		family : {
			type: "Hard",
			origin: "Kashmir"
		}
	}, {
		name:'grapes',
		color:'green',
		taste : ["sweet", "sour"],
		family : {
			type: "soft",
			origin: "Thimmapur"
		},
	}];

fruits.forEach((fruit) => {
	fruit.taste.forEach((taste) => {
		console.log(taste);
	})
	console.log(`${fruit.family.type} ${fruit.family.origin}`)
});

function Person(name) {
 this.name = name;
 this.getName = function() {
 	return this.name;
 }
 
}

var Person1 = new Person('reena');
console.log(Person1.getName());
var Person2 = new Person('sana');
console.log(Person2.getName());


let z = {

}

z.name = "reena";

console.log(z);













