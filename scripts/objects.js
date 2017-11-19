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