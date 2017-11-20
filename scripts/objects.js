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











