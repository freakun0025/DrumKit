//we will not use parenthesis because if we use them whenever we load the site, the function will run without us clicking desired button which we do not require hence NO PARENTHESIS

//detecting button press
var buttons = document.getElementsByClassName("drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML; // 'this' here tells which button is being clicked
    clickPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press
document.addEventListener("keypress", handleKeyPress); //higher order functions means taking functions as parameters.

function handleKeyPress(event) {
    clickPress(event.key);
    buttonAnimation(event.key);
}

function clickPress(key) {
    var button = document.querySelector("." + key); //In summary, this code changes the text color of the button associated with the key pressed to a specific color defined in the getButtonColor function. It first finds the button element using its class name, checks if the element exists, and then updates its color style.
    if (button) {
        button.style.color = getButtonColor(key);
    }

    switch (key) {  
        case "w":
            
            new Audio("./sounds/tom-1.mp3").play(); //when we do this we are basically calling a method play from the class Audio which creates an object when we use 'new'
            break;
        case "a":
            
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        //What to do when clicked
    }
}

function getButtonColor(key) {
    switch (key) {
        case "w":
            return "red";
        case "a":
            return "orange";
        case "s":
            return "yellow";
        case "d":
            return "green";
        case "j":
            return "blue";
        case "k":
            return "indigo";
        case "l":
            return "violet";
        default:
            return "black";
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key); //because we need to select the element associated with this class
    activeButton.classList.add("pressed")
    setTimeout(function(){  //sets a timeout to give it somewhat of an animated look we add a class to give css effects and then remove it after 100millisec to make it look like an animation. NEAT!!!!
        activeButton.classList.remove("pressed");
    },100)
}
