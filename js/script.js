const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const digitBtn = document.querySelectorAll('.digit');
const output = document.querySelector("#output");
const allClearBtn = document.querySelector('#all-clear-btn');
const operatorBtn = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal');
const enterBtn = document.querySelector("#enter-btn");
const negativeBtn = document.querySelector('#negative');
const clearBtn = document.querySelector('#clear')
const add = (a,b) => {return a + b};
const subtract = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {
    if(b == 0){
        for (const key in numbersStored){
            delete numbersStored[key];
        }
        return 'ERROR'
    }
    else{return a/b}
};


let numbersStored = {};


function inputDigits(){
    for (let btn of digitBtn){
        btn.addEventListener('click', (e) => {
            if(output.textContent == 0 && !(output.textContent.includes('.'))){
            output.textContent=''}
            else if(output.textContent == numbersStored['last_number'] || output.textContent == numbersStored['results'] ){
                output.textContent = ''} 
            output.textContent += `${e.target.textContent}`});
            
    }
    
}


function inputOperator(){
    for (let btn of operatorBtn){
        btn.addEventListener('click', (e) => {
            decimalBtn.disabled = false
            numbersStored['last_number'] = output.textContent
            numbersStored['operator'] = `${e.target.textContent}`
        });
        
    }
}

function equalOperate(){
    enterBtn.addEventListener('click', () => {
        if (!('next_number' in numbersStored)){
            numbersStored['next_number'] = output.textContent
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['last_number']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent}
        else if ((numbersStored['results']) == output.textContent){
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['results']), parseFloat(numbersStored['next_number']))
            numbersStored['results'] = output.textContent
        }
        else if ((numbersStored['last_number']) == (numbersStored['results'])){
            numbersStored['next_number'] = output.textContent
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['last_number']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent;}
        else {numbersStored['next_number'] = output.textContent;
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['results']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent;}
        decimalBtn.disabled = false
        console.log(numbersStored)
    } )
};



function operate(operator, a , b){
    switch(operator){
        case '+':{
            return parseFloat(add(a ,b).toFixed(12));
        }   
        case '-':{
            return parseFloat(subtract(a,b).toFixed(12));
        }
        case 'x':{
            return parseFloat(multiply(a,b).toFixed(12));
        }
        case '/':{
            return parseFloat(divide(a,b).toFixed(12));
        }
    }
}



allClearBtn.addEventListener('click', () => {
    output.textContent = 0;
    for (const key in numbersStored){
        delete numbersStored[key];
    }
    decimalBtn.disabled = false;
})

clearBtn.addEventListener('click', () =>{
    output.textContent = 0;
    decimalBtn.disabled = false
}) 

function decimalButton(){
    decimalBtn.addEventListener('click', () => {
        decimalBtn.disabled = true;
        if(numbersStored['results'] == output.textContent){ 
            numbersStored['last_number'] = numbersStored['results']
        }   
    })
}


negativeBtn.addEventListener('click', () => {
    if (Number(output.textContent) > 0){
        output.textContent = '-' + output.textContent}
    else{output.textContent = Math.abs(Number(output.textContent))};
})





inputDigits()
decimalButton()
inputOperator()
equalOperate()


