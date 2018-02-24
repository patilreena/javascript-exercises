this.x = 10;

let module = {
  y: 20,
  getX: () => {
    return this.x;
  }
};

let getX = module.getX.bind(this);
console.log(getX());

// things to learn and practice
// this
// bind, call, apply;
// function.bind
// function.call
// function.apply
// arraw function how `this` works
