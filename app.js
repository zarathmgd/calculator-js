let body = document.querySelector("body");
let display = document.querySelector("#display");
let button = Array.from(document.querySelectorAll("#button button"));
let redButton = document.querySelector("#red");
let greenButton = document.querySelector("#green");
let blueButton = document.querySelector("#blue");
let calculator = document.querySelector(".calculator");
let otherButtons = document.querySelectorAll(".other");
let backgroundAnim = document.querySelector("#background-animation");
let elementAnim = document.querySelector("i")

button.map (button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "←":
               display.innerText = display.innerText.slice(0, -1);
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                }
                catch {
                    display.innerText = "Error !"
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})

redButton.addEventListener("click", () => {
    calculator.classList.add("redmode-calculator");
    display.classList.add("redmode-button-display");

    if (calculator.classList.contains("bluemode-calculator")) {
        calculator.classList.remove("bluemode-calculator");
        display.classList.remove("bluemode-button-display");
    }
    else if (calculator.classList.contains("greenmode-calculator")) {
        calculator.classList.remove("greenmode-calculator");
        display.classList.remove("greenmode-button-display");
    };

    for (i = 0; i < button.length; i++) {
        button[i].classList.add("redmode-button-display");
        if (button[i].classList.contains("greenmode-button-display")) {
            button[i].classList.remove("greenmode-button-display");
        }
        else if (button[i].classList.contains("bluemode-button-display")) {
            button[i].classList.remove("bluemode-button-display");
        }
    }
});

greenButton.addEventListener("click", () => {
    calculator.classList.add("greenmode-calculator");
    display.classList.add("greenmode-button-display");

    if (calculator.classList.contains("bluemode-calculator")) {
        calculator.classList.remove("bluemode-calculator");
        display.classList.remove("bluemode-button-display");
    }
    else if (calculator.classList.contains("redmode-calculator")) {
        calculator.classList.remove("redmode-calculator");
        display.classList.remove("redmode-button-display");
    };

    for (i = 0; i < button.length; i++) {
        button[i].classList.add("greenmode-button-display");
        if (button[i].classList.contains("bluemode-button-display")) {
            button[i].classList.remove("bluemode-button-display");
        }
        else if (button[i].classList.contains("redmode-button-display")) {
            button[i].classList.remove("redmode-button-display");
        }
    }
});

blueButton.addEventListener("click", () => {
    calculator.classList.add("bluemode-calculator");
    display.classList.add("bluemode-button-display");

    if (calculator.classList.contains("redmode-calculator")) {
        calculator.classList.remove("redmode-calculator");
        display.classList.remove("redmode-button-display");
    }
    else if (calculator.classList.contains("greenmode-calculator")) {
        calculator.classList.remove("greenmode-calculator");
        display.classList.remove("greenmode-button-display");
    };

    for (i = 0; i < button.length; i++) {
        button[i].classList.add("bluemode-button-display");
        if (button[i].classList.contains("redmode-button-display")) {
            button[i].classList.remove("redmode-button-display");
        }
        else if (button[i].classList.contains("greenmode-button-display")) {
            button[i].classList.remove("greenmode-button-display");
        }
    }
});

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let symbolString = "ァ ィ ゥ ェ ォ ン ム デ ヷ ボ ナ サ セ タ テ";
symbolString.split(" ");
let alphabetString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
alphabetString.split(" ")
let stringArray = numberArray + symbolString + alphabetString;
let count = 20;
let textCount = 100;
let i = 0;

while (i < count) {
    let numberEl = document.createElement("i");
    for (j = 0; j < textCount; j++) {
        numberEl.innerHTML += stringArray[Math.floor(Math.random() * stringArray.length)];
    }
    i++;
    backgroundAnim.appendChild(numberEl);

    numberEl.style.animationDelay = Math.random() * 4 + "s";
    
    redButton.addEventListener("click", () => {
        if (numberEl.classList.contains("bluemode-animation") | numberEl.classList.contains("greenmode-animation")) {
            numberEl.classList.remove("bluemode-animation");
            numberEl.classList.remove("greenmode-animation");
        }

        numberEl.classList.add("redmode-animation");
    })
    greenButton.addEventListener("click", () => {
        if (numberEl.classList.contains("redmode-animation") | numberEl.classList.contains("bluemode-animation")) {
            numberEl.classList.remove("redmode-animation");
            numberEl.classList.remove("bluemode-animation");
        }

        numberEl.classList.add("greenmode-animation");
    })
    blueButton.addEventListener("click", () => {
        if (numberEl.classList.contains("redmode-animation") | numberEl.classList.contains("greenmode-animation")) {
            numberEl.classList.remove("redmode-animation");
            numberEl.classList.remove("greenmode-animation");
        }

        numberEl.classList.add("bluemode-animation");
    })
}