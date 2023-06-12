function isLengthFour() {
    const randomNumbers = randomPin();
    const stringNumber = randomNumbers + '';
    if (stringNumber.length === 4) {
        return randomNumbers;
    } else {
        return isLengthFour;
    }
}

function randomPin() {
    const randomNumber = Math.round(Math.random()*10000)
    return randomNumber;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = isLengthFour();
    const display = document.getElementById('display-pin');
    display.value = pin;
})