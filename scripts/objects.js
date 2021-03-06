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

// editing properties in objects

let person = {
  name :"reena",
  age: 25,
  weekendAlarm: 'No alarms needed',
  weekAlarm:'Alarm set to 7AM'
  }
person.hobbies = ['reading','singing'];
person.hobbies = ['dancing'];
console.log(person.hobbies);

// methods

let person = {
  name :"reena",
  age: 25,
  weekendAlarm: 'No alarms needed',
  weekAlarm:'Alarm set to 7AM',
  sayHello: function ()  {
    return 'Hello, there!';
}
  }
console.log(person.sayHello());


// this keyword

let person = {
  name :"reena",
  age: 25,
  weekendAlarm: 'No alarms needed',
  weekAlarm:'Alarm set to 7AM',
  sayHello: function ()  {
    return `Hello, my name is ${this.name}`;
},
  sayGoodbye(hi)  {
   return 'Goodbye!';
}
  }


 // getter and setter methods


 let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  },
  };

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);




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

};

z.name = "reena";

console.log(z);


// shopping cart program

let shoppingCart = [{
	name :"pant",
	quantity: 3,
	unit_price: 100,
	total_price:function() {
		return this.quantity * this.unit_price;
	},
	gst:10,
	total_gst:function() {
		return this.total_price() * this.gst / 100;
	}
},{
	name :"top",
	quantity: 2,
	unit_price: 300,
	total_price:function() {
		return this.quantity * this.unit_price;
	},
	gst:13,
	total_gst:function() {
		return this.total_price() * this.gst / 100;
	}
},{
	name :"t-shirt",
	quantity: 10,
	unit_price: 1000,
	total_price:function() {
		return this.quantity * this.unit_price;
	},
	gst:2,
	total_gst:function() {
		return this.total_price() * this.gst / 100;
	}
}];

let total_price = 0;
shoppingCart.forEach((product) => {
  total_price += product.total_price() + product.total_gst();
});


// constructor

function Mobile(name,price) {
	this.name = name;
	this.price = price;
	this.getName = function() {
		return this.name;
	}
}
 
 var iphone = new Mobile("iphone",100);
 var samsung = new Mobile("samsung",200);


// constructor

 function OrderItem(name,quantity,unit_price,gst) {
 	this.name = name;
 	this.quantity = quantity;
 	this.unit_price = unit_price;
 	this.gst = gst;
 	this.total_price = function() {
 		return this.quantity * this.unit_price;
 	}
 	this.total_gst = function() {
 		return this.total_price() * this.gst / 100;
 	}
}

var jeans = new OrderItem("bluejeans",3,100,13);



function Movie(name,ratings,reviews) {
	this.name = name;
	this.ratings = ratings;
	this.reviews = reviews;
	}


let film = new Movie("wonder women",5,"good");
















