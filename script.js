let display = document.querySelector('#calcDisplay');
let currentValue = '';
let buttons = document.querySelectorAll('button');

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
                display.value = currentValue;
                break;
            default:
                currentValue += buttonValue;
                display.value = currentValue;
                break;
        }

        

    })
}