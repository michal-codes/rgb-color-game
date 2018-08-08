let numColors = 6;
let colors;
let pickedColor;
let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");
let title = document.querySelector("#title");
let pickedColorDispaly = document.querySelector("#pickedColorDispaly");
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");

generateColors();

for(let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        (modeBtn[i].textContent == "Easy") ? numColors = 3: numColors = 6;
        generateColors();
        hideSquares();
        reset();
    });
}

function generateColors() {
    colors = randomColors();
    pickedColor = pickColor(colors);
    pickedColorDispaly.textContent = pickedColor;
}

function hideSquares () {
    if(colors.length == 3) {
        for(let i = 3; i < squares.length; i++) {
            squares[i].style.display = "none";
        }
    } else {
        for(let i = 3; i < squares.length; i++) {
            squares[i].style.display = "block";
        }
    }
}

for(let i =0; i < squares.length; i++) {
    if(colors[i]) {
        squares[i].style.backgroundColor = colors[i];
    } 
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor == pickedColor) {
            setColorOfWinMsg();
            title.style.backgroundColor = pickedColor;
            for(let i =0; i < squares.length; i++) {
            squares[i].style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play again?"
            }
        } else {
            messageDisplay.textContent = "Try again";
            this.style.backgroundColor = "rgb(96, 97, 103)";
        }
    });
}

resetBtn.addEventListener("click", reset);

function reset() {
    resetBtn.textContent = "New colors";
    colors = randomColors();
    pickedColor = pickColor(colors);
    title.style.backgroundColor = "rgb(32, 34, 43)";
    pickedColorDispaly.textContent = pickedColor;
    resetColorOfWinMsg();
    for(let i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];  
    }
    messageDisplay.textContent = "🤖 play";
}

function setColorOfWinMsg() {
    messageDisplay.textContent = "Correct";
    messageDisplay.style.fontSize = "18px";
    messageDisplay.style.color = "rgb(0, 255, 0)"
}

function resetColorOfWinMsg() {
    messageDisplay.style.fontSize = "12px";
    messageDisplay.style.color = "white"
}

function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function randomColors() {
    let arr = [];
    for (let i = 0; i < numColors; i++) {
        arr.push(randomRgb());
    }
    return arr;
}
function pickColor(color) {
    let placeInArr =  Math.floor(Math.random() * numColors);
    return color[placeInArr];
}