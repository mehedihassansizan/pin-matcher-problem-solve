document.getElementById('buttons').addEventListener('click', function(event){
    const buttonValue = event.target.innerText;
    const calculatorDisplay = document.getElementById('calculator-display');
    const displayValue = calculatorDisplay.value;

    if (isNaN(buttonValue)) {
        if(buttonValue === 'C'){
            calculatorDisplay.value = ''; 
        }
        else if(buttonValue === '<' ){
            calculatorDisplay.value = calculatorDisplay.value.toString().slice(0, -1);
            
            // const getArray = displayValue.split('');
            // getArray.pop();
            // const joinArray = getArray.join('');
            // calculatorDisplay.value = joinArray;
        }
    } 
    else {
        calculatorDisplay.value += buttonValue;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const verifyPin = document.getElementById('display-pin');
    const verifyPinValue = verifyPin.value;
    const calculatorDisplayValue = document.getElementById('calculator-display').value;
    const yes = document.getElementById('yes');
    const no = document.getElementById('not');
    if (verifyPinValue === calculatorDisplayValue) {
        yes.style.display = 'block';
        no.style.display ='none';

    } else {
        no.style.display = 'block';
        yes.style.display = 'none';
    }
})