let calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    alert('calculator is turning off');
    calculatorOn = false;
  } else {
    alert('calculator is turning on');
    calculatorOn = true;
  }
}

pressPowerButton();
pressPowerButton();
