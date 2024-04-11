let display = document.querySelector('#calcDisplay');
let currentValue = '';
let buttons = document.querySelectorAll('button');

let operatorCount = 0;

//division

function division(expression){
    var [dividend, divisor] = expression.split('/');
    return parseFloat(dividend) / parseFloat(divisor);
    
}


function multiply(expression){
    var [multiplicand, multiplier]= expression.split('*');
    operatorCount +=1
    return parseFloat(multiplicand) * parseFloat(multiplier);
    
}


function add(expression){
    var [a, b]= expression.split('+');
    operatorCount +=1
    return parseFloat(a) + parseFloat(b);
    
}


function subtract(expression){
    var [a, b]= expression.split('-');
    operatorCount +=1
    return parseFloat(a) - parseFloat(b);
    
}


function evaluate(expression){
    let regex = /(\/|\*|\+|\-)/;
    var match = expression.match(regex);

    if (!match) {
        return expression;
    }

    var result

    switch(match[0]){
        case '/':
            result = division(expression);
            break;
        case '*':
            result = multiply(expression);
            break;
        case '+':
            result = add(expression);
            break;
        case '-':
            result = subtract(expression);
            break;
    }    
    
    return result;    
}

for(let button of buttons){
    button.addEventListener('click',()=>{
        var buttonValue = button.textContent;
        
        switch(buttonValue) {
            case "AC":
                currentValue = "";
                display.value = currentValue;
                break;
            case "DEL":
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
                break;
            case "=":
                operatorCount = 0;
                currentValue = evaluate(currentValue);
                display.value = currentValue;
                break;
            case "+":
            case "-":
            case "/":
            case "*":
                operatorCount += 1;
                currentValue += buttonValue;
                display.value = currentValue;
                if(operatorCount === 2){
                    evalValue = currentValue.slice(0, -1);
                    currentValue = evaluate(evalValue) + currentValue[currentValue.length-1];
                    display.value = currentValue;
                    operatorCount = 1;            
                }
                break;
                
            default:
                
                currentValue += buttonValue;
                display.value = currentValue;
                break;
        }        

    })
}



