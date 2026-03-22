let display = document.getElementById("display");

let button = document.querySelectorAll("button");

let string = "";
let itString = false

document.addEventListener("keydown",(e) => {
    let key = e.key;
    if(key>=0 && key<=9){
        string += key;
        display.value = string;
    } else if(key == "+"){
        string += "+";
        display.value = string;
    } else if(key == "-"){
        string += "-";
        display.value = string;
    } else if(key == "*"){
        string += "*";
        display.value = string;
    } else if(key == "/"){
        string += "/";
        display.value = string;
    } else if(key == "Enter"){
        string = eval(string);
        display.value = string;
    } else if(key == "Backspace"){
        string = string.slice(0,-1);
        display.value = string;
    } else if(key == "Delete"){
        string = "";
        display.value = string;
    } else if(key == "."){
        string += ".";
        display.value = string;
    } 
})
button.forEach(button => {
    button.addEventListener("click",(e) => {
        e.target.style.backgroundColor = "salmon"

        setTimeout(() =>{
            e.target.style.backgroundColor = "black"
        },100)
    })
    button.addEventListener("click",(e) => {
        let value = e.target.innerText;

        if(value == "AC"){
            string = "";
            display.value = string;
        } else if(value == "="){
            string = eval(string);
            display.value = string;
            itString = true;
        } else if(value == "x"){
            string += "*";
            display.value = string;
        } else if(value == "/"){
            string += "/";
            display.value = string;
        } else if(value == "%"){
            string += "%";
            display.value = string;
        } else if(value == "-"){
            string += "-";
            display.value = string;
        } else if(value == "C"){
            string = string.slice(0,-1);
            display.value = string;
        } else {
            if(itString){
                string = "";
                itString = false
            }
            string += value;
            display.value = string;
        }
    })
})

