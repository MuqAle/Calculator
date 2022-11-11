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
const percentBtn = document.querySelector('#percent')
const functionBtn = document.querySelectorAll('.function')
output.maxLength = '11'
const add = (a,b) => {return a + b};
const subtract = (a,b) => {return a - b};
const multiply = (a,b) => {return a * b};
const divide = (a,b) => {
    if(b == 0){
        operatorBtn.forEach(function(button){
            button.classList.remove("active");})
        return output.innerHTML ='ERROR'
    }
    else{return parseFloat((a/b).toFixed(10))}
};


let numbersStored = {};




function inputDigits(){
    for (let btn of digitBtn){
        btn.addEventListener('click', function(e){
            if(output.textContent == 0 && !output.textContent.includes('.')){
                output.textContent=''}
            else if(output.textContent == numbersStored['last_number'] || output.textContent == numbersStored['results'] ){
                output.textContent = ''}
            else if(output.textContent == 'ERROR'){
                output.textContent = ''
            }
            output.textContent += `${e.target.textContent}`;
            output.textContent = output.textContent.substring(0,10);
            clearBtn.classList.add('clear_all');
            if(!(output.textContent == 0 && !output.textContent.includes('.'))){
                clearBtn.textContent='C'}}); 
            btn.addEventListener('mousedown', () => btn.classList.add('click-digit'))
            btn.addEventListener('transitionend', (e) => {
                if(e.propertyName != 'transform')
                return;
                else{btn.classList.remove('click-digit')}
            if(numbersStored['results'] == 'ERROR'){
                clearEverything()
            }
            })
           
    }
    
}



function inputOperator(){
    for (let btn of operatorBtn){
        btn.addEventListener('click', (e) => {
            decimalBtn.disabled = false
            clearBtn.classList.add('clear_all')
            numbersStored['last_number'] = output.textContent
            numbersStored['operator'] = `${e.target.textContent}`;
            if(numbersStored['results'] == 'ERROR'){
                clearEverything()
            }
            clearBtn.classList.add('clear_all')
            clearBtn.textContent = 'C'
        });
        btn.addEventListener('mousedown', () => btn.classList.add('click-operator'))
        btn.addEventListener('transitionend', (e) => {
            if(e.propertyName != 'transform')
            return;
            else{btn.classList.remove('click-operator')}
        })
        
    }
};

function functionTransition(){
    for(let btn of functionBtn){
        btn.addEventListener('mousedown', () => btn.classList.add('click-function'))
        btn.addEventListener('transitionend', (e) => {
            if(e.propertyName != 'transform')
            return;
            else{btn.classList.remove('click-function')}
        })
    }
}

function equalOperate(){
    enterBtn.addEventListener('click', () => {
        if (!('next_number' in numbersStored)){
            numbersStored['next_number'] = output.textContent
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['last_number']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent;
            output.textContent = output.textContent.substring(0,10)}
        else if ((numbersStored['results']) == output.textContent){
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['results']), parseFloat(numbersStored['next_number']))
            numbersStored['results'] = output.textContent;
            output.textContent = output.textContent.substring(0,10)
        }
        else if ((numbersStored['last_number']) == (numbersStored['results'])){
            numbersStored['next_number'] = output.textContent
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['last_number']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent;
            output.textContent = output.textContent.substring(0,10);}
        else {numbersStored['next_number'] = output.textContent;
            output.textContent = operate(numbersStored['operator'], parseFloat(numbersStored['results']), parseFloat(numbersStored['next_number']));
            numbersStored['results'] = output.textContent;
            output.textContent = output.textContent.substring(0,10)}
        decimalBtn.disabled = false
        if (!('last_number' in numbersStored)){
            output.textContent = 0
            clearEverything()
        }
        clearBtn.classList.add('clear_all')
        clearBtn.textContent = 'C'
        console.log(numbersStored)
    })
};



function operate(operator, a , b){
    switch(operator){
        case '+':{
            if(parseFloat(add(a,b).toFixed(10)).toString().length > 10){
                return parseFloat(add(a,b).toFixed(12)).toExponential(4)
            }
            else{return parseFloat(add(a,b).toFixed(12));}
        }   
        case '-':{
            if(parseFloat(subtract(a,b).toFixed(10)).toString().length > 10){
                return parseFloat(subtract(a,b).toFixed(12)).toExponential(4)
            }
            else{return parseFloat(subtract(a,b).toFixed(12));}
        }
        case 'x':{
            if(parseFloat(multiply(a,b).toFixed(10)).toString().length > 10){
                return parseFloat(multiply(a,b).toFixed(12)).toExponential(4)
            }
            else{return parseFloat(multiply(a,b).toFixed(12));}
        }
        case '/':{
            if(divide(a,b).toString().length > 10){
                return divide(a,b).toExponential(4)
            }
            else{return divide(a,b);}  
        }
    }
};




clearBtn.addEventListener('click', () =>{
    if(clearBtn.classList.contains('clear_all')){
        clearBtn.textContent = 'AC'
        output.textContent = 0;
        decimalBtn.disabled = false
        clearBtn.classList.remove('clear_all')
    }
    else{
    clearEverything();
    operatorBtn.forEach(function(button){
        button.classList.remove("active");})
    output.textContent = 0;
    decimalBtn.disabled = false;
    }
    
}); 

function decimalButton(){
    decimalBtn.addEventListener('click', () => {
        decimalBtn.disabled = true
        clearBtn.classList.add('clear_all')
        clearBtn.textContent='C'
            if(output.textContent == numbersStored['last_number'] || output.textContent == numbersStored['results'] ){
                output.textContent = '0'}
        output.textContent = output.textContent + '.' 
        if(numbersStored['results'] == output.textContent){ 
            numbersStored['last_number'] = numbersStored['results']
        }   
    })
};


negativeBtn.addEventListener('click', () => {
    if (Number(output.textContent) > 0){
        output.textContent = '-' + output.textContent}
    else{output.textContent = Math.abs(Number(output.textContent))};
});

percentBtn.addEventListener('click', () => {output.textContent = parseFloat((output.textContent / 100).toFixed(12))});

function clearEverything(){
    for (const key in numbersStored){
        delete numbersStored[key];
    }
};

document.addEventListener("click", function(evt){
    if(evt.target.classList.contains("operator")){
        operatorBtn.forEach(function(button){
            button.classList.remove("active");
});
    evt.target.classList.add("active");
}
});






decimalButton()
inputDigits()
inputOperator()
equalOperate()
functionTransition()


