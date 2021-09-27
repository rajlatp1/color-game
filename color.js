var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var systemMessageDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector('#header');


var colors = generateRandomColors(6);
pickedColor = pickColor();

setupMode();

function generateRandomColors(num) {
    var arr = [];
    for (i=0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}
function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log("pickColor");
    return colors[random];
}

// Reset Game...
resetButton.addEventListener('click', function(){
  reset();
})

 function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    systemMessageDisplay.innerHTML = pickedColor;
    header.style.backgroundColor = 'steelblue';
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(i=0; i<=squares.length; i++) {
        if(colors[i]) { 
            squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
    }
 }

systemMessageDisplay.innerHTML = pickedColor;

for (i=0; i<squares.length; i++) {
    //apply background colour to all the squares...
    squares[i].style.backgroundColor = colors[i]

    //enable click event on each square.....
    squares[i].addEventListener('click', function() {

        //if the user selected the right colour....
        var clickedColor = this.style.backgroundColor;
        //check if the selected colour matches the default colour...
        if(pickedColor === clickedColor) {
            header.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "CORRECT :)";
            resetButton.textContent = "Play Again";
            changeColors(pickedColor);
        }
        //if the user selected wrong colour....
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again :( ";

        }
    })
};

function changeColors(color) {
    for (i=0; i<=squares.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

