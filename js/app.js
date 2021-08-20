function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got 3 digit pin and calling again ',pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
// verify pin 
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if(pin == typedPin){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
// by using event bubble accessing every number
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        calcInput.value = previousNumber + number;
    }
});