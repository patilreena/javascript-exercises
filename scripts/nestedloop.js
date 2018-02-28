//Finding out the common place

let myPlaces = ['Paris', 'Fiji', 'Bali'];
let myFriendPlaces = ['Tasmenia', 'Hamilton', 'Fiji'];

for (let i = 0; i < myPlaces.length; i++) {
  for (let j = 0; j < myFriendPlaces.length; j++) {
    if (myPlaces[i] === myFriendPlaces[j]) {
      console.log(myPlaces[i]);
    }
  }
}
