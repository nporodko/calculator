const input = document.getElementById('input')
const numberButton = document.querySelectorAll('.button');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const operationButton  = document.querySelectorAll('.operator');

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => {
    if (b === 0) {
        return "";
    } else if (a/b % 1 !== 0) {
       return (a/b).toFixed(2)
      } else {
        return a/b;
      }
   };

const operate = () => {
     const str = input.value
     const [, firstValue, operator, secondValue] = str.split(/^(\d+)([\+\-\/\*])(\d+)$/g);
     console.log(firstValue, operator, secondValue);
    switch(operator) {
        case '+':
            input.value = add(parseFloat(firstValue), parseFloat(secondValue));  
            break;
        case '-':
            input.value = subtract(parseFloat(firstValue), parseFloat(secondValue));
        break;
        case '*':
            input.value = multiply(parseFloat(firstValue), parseFloat(secondValue));
        break;
        case '/':
           input.value = divide(parseFloat(firstValue), parseFloat(secondValue));
           console.log(input.value)
        break; 
        default:
            break;
    }
}

const inputPattern = /^((?!0)\d+)?([\+\-\/\*])?((?!0)\d+)?$/

clearButton.addEventListener('click', () => {
      input.value = '';
    });


    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener('click', (e) => {
            const nextValue = input.value + e.target.value;

          if (!inputPattern.test(nextValue)) {
            return
          }
           input.value = nextValue;
        })
    }

    for (let j = 0; j < operationButton.length; j++) {
        operationButton[j].addEventListener('click', (e) => {
            const nextValue = input.value + e.target.value;
            
            if (!inputPattern.test(nextValue)) {
            return
          }
           input.value = nextValue;
        })
    }  
    
    equalButton.addEventListener('click', operate)
     
 

 









