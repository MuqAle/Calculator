const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const digitBtn = document.querySelectorAll('.digit');
const output = document.querySelector("#output");
const clearBtn = document.querySelector('#clear-btn');
const operatorBtn = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal');
const enterBtn = document.querySelector("#enter-btn")
const add = (a,b) => {return a + b};
const subtract = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {return a / b};


let numbersStored = {};




function inputDigits(){
    for (let btn of digitBtn){
        btn.addEventListener('click', (e) => {
            output.textContent += `${e.target.textContent}`});
    }

}


function inputOperator(){
    for (let btn of operatorBtn){
        btn.addEventListener('click', (e) => {
            numbersStored['first_number'] = output.textContent
            numbersStored['operator'] = `${e.target.textContent}`
            output.textContent = ''  
        });
    }
}

function equalOperate(){
    enterBtn.addEventListener('click', (e) => {
        numbersStored['second_number'] = output.textContent
        output.textContent = operate(numbersStored['operator'], Number(numbersStored['first_number']), Number(numbersStored['second_number']))
        console.log(numbersStored)
    } )
}


function operate(operator, a , b){
    switch(operator){
        case '+':{
            return add(a ,b);
        }   
        case '-':{
            return subtract(a,b);
        }
        case 'x':{
            return multiply(a,b);
        }
        case '/':{
            return divide(a,b);
        }
    }
}




clearBtn.addEventListener('click', () => {
    output.textContent = '';
    for (const key in numbersStored){
        delete numbersStored[key];
    }
    decimalBtn.disabled = false;
})

decimalBtn.addEventListener('click', () => decimalBtn.disabled = true)
inputDigits()
inputOperator()
equalOperate()

