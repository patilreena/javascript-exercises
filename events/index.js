// let btn = document.querySelector('button');
// let btn1 = document.querySelector('.btn');

// function random(number) {
// 	return Math.floor(Math.random() * (number + 1));
// }

//  function bgChange(e) {
// 	let rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
// 	e.target.style.backgroundColor = rndcol;
// }

// btn.onclick = bgChange;
// btn1.onclick = bgChange;





// for(let i = 1; i <= 16; i++) {
// 	let create = document.createElement('div');
// 	document.body.appendChild(create);
// }

// function random(number) {
// 	return Math.floor(Math.random() * (number ));
// }

// function bgChange() {
// 	let rndcol = 'rgb(' + random(255) + ',' + random(255)+ ',' + random(255) + ')';
// 	return rndcol;
// }

// let divs = document.querySelectorAll('div');

// for(let i = 0; i < divs.length; i++) {
// 	divs[i].onclick = function(e) {
// 		e.target.style.backgroundColor = bgChange();
// 	}
// }





// let btn = document.querySelector('button');
// let btn1 = document.querySelector('.btn');

// function random(number) {
// 	return Math.floor(Math.random() * (number + 1));
// }

//  function bgChange(e) {
// 	let rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
// 	e.target.style.backgroundColor = rndcol;
// }

// btn.addEventListener('click',bgChange);
// // btn1.onclick = bgChange;

let form = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
let para = document.querySelector('p');

form.onsubmit = function(e) {
	if( fname.value === '' || lname.value === '') {
		e.preventDefault();
		para.textContent = 'you need to fill both in names'
	}
}




class Button extends React.Component{
	render(){
		return <button>click me</button>
	}
}


