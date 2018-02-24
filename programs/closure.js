//What will be the output of following console

fn1();

fn2();

function fn1() {
  console.log('this is function 1');
}

var fn2 = function() {
  console.log('this is function 2');
};

// Variable hoisting with var keyword
// Is there a hoisting in let and const



6 - Running the following code was causing the browser to crash after a certain time,
 Whats the reason for that and how to fix it?


var theValue = null;
    var replaceValue = () => {

        var originalValue = theValue; //null

        var unused = () => {
            if(originalValue)
            console.log("I will never be Fired!");
        };

        theValue = {
            longStr: new Array(1000000).join('*'),
            someMethod: () => { }
        };
    };

    setInterval(replaceValue,1000);