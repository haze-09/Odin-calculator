let display = document.querySelector('#calcDisplay');
let currentValue = '';
let buttons = document.querySelectorAll('button');




function division(expression){
    var [dividend, divisor] = expression.split('/');
    return parseFloat(dividend) / parseFloat(divisor);
    
}


function multiply(expression){
    var [multiplicand, multiplier]= expression.split('*');
    return parseFloat(multiplicand) * parseFloat(multiplier);
    
}


function add(expression){
    var [a, b]= expression.split('+');
    return parseFloat(a) + parseFloat(b);
    
}


function subtract(expression){
    var [a, b]= expression.split('-');
    return parseFloat(a) - parseFloat(b);
    
}


function evaluate(expression){
    let regex = /(\/|\*|\+|\-)/;
    var match = expression.match(regex);

    console.log("Expression:", expression); // Log the expression
    console.log("Match:", match); // Log the match result


    if (!match) {
        return expression;
    }

    var result;

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
    
    return result.toString();    
}

document.addEventListener('keydown',(event) => {
    var key = event.key;

    const keyMappings = {
        'Enter':'=',
        'Backspace':'DEL',
        'Escape':'AC',
    };

    var buttonValue = keyMappings[key] || key;
    console.log(buttonValue);

    const buttons = document.querySelectorAll('button');

    


    buttons.forEach((button) => {

        if (button.value === buttonValue) {            
            button.click();
        }
    });
});


function isSecondLastNumber(str) {
    return /\d/.test(str.charAt(str.length - 2));
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
            case "+":
            case "-":
            case "/":
            case "*":
                currentValue += buttonValue;
                display.value = currentValue;

                if(currentValue.charAt(currentValue.length - 1) === '='){
                    if(isSecondLastNumber(currentValue)){
                        currentValue = currentValue.slice(0, -1);
                        currentValue = evaluate(currentValue);
                        display.value = currentValue;
                    }
                    else{
                        let regex = /(\d+(\.\d+)?)[+\-*\/]?\.?=/;
                        let match = currentValue.match(regex);
                        currentValue = match[1];
                        display.value = currentValue;
                    }
                }
                else{
                    if(isSecondLastNumber(currentValue)){
                        let operator = currentValue.charAt(currentValue.length - 1);
                        currentValue = evaluate(currentValue.slice(0, -1)) + operator;
                        display.value = currentValue;
                    }
                    else{
                        let operator = currentValue.charAt(currentValue.length - 1);
                        currentValue = currentValue.slice(0, -2) + operator;
                        display.value = currentValue;
                    }
                }                
                break;
                
            default:
                
                currentValue += buttonValue;
                display.value = currentValue;
                if(/\d+\.(\d+)?\./.test(currentValue)){
                    currentValue = currentValue.slice(0, -1);
                    display.value = currentValue;                 
                }              
                
                break;
        }        

    })
}








