for (var i = 1; i < 100; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  })(i);
}

// Closure
// setTimeout
// Asynchoronus
