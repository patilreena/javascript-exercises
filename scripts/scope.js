//Scope refers to where a variable can be accessed in a program. While some variables can be accessed from
// anywhere within a program, other variables may only be available in a specific context. 
//Scope depends entirely on where a variable is declared.

//global scope -1
//Global variables make data accessible from any place within a program.

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  return `Night Sky ${satellite} ${stars} ${galaxy}`;
}

console.log(myNightSky());

//global scope - 2

const satelite = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const myNightSky1 = () => {
  stars1 = 'Sirius';
  return `Night Sky ${satelite} ${stars1} ${galaxy1}`;
}

console.log(myNightSky1());
console.log(stars1);

//Block scope
// Block scope means that a variable defined in the block is only accessible within the curly braces.

// const visibleLightWaves = () => {
//   let lightWaves = 'Moonlight';
//   console.log(lightWaves);
// }
// visibleLightWaves();
// console.log(lightWaves); // it shows an error

//block scope - 2

const LightWaves = () => {
  let Waves = 'Moonlight';
  let region = 'The Arctic';
  if(region === 'The Arctic') {
    let Waves =  'Northern Lights';
    console.log(Waves);
  }
  console.log(Waves);
};

LightWaves();

//block scope - 3
const starCount = () => {
  let i = 5;
  console.log(i);
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
}
starCount();
console.log(i);

//Global Scope refers to variables that are accessible to every part of the program.
//Block Scope refers to variables that are accessible only within the block they are defined.