const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const digitBtn = document.querySelectorAll('.digit');





const add = (a,b) => {return a + b}
const subtract = (a,b) => {return a - b}
const multiply = (a,b) => {return a * b}
const divide = (a,b) => {return a / b}

function operate(operator, a , b){
    switch(operator){
        case '+':{
            return add(a ,b);
        }   
        case '-':{
            return subtract(a,b);
        }
        case '*':{
            return multiply(a,b);
        }
        case '/':{
            return divide(a,b);
        }
    }
}