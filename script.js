let numOfSquares = 9;
let colors = generateRandomColors(numOfSquares);

guess = 3;
let numGuess = document.getElementById("guess")
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById("message");
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn  = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
     hardBtn.classList.remove('selected');
     easyBtn.classList.add('selected');
     numOfSquares = 6;
     restartGame();
     numGuess.textContent = 3;
     colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;

     for(let i = 0; i < squares.length; i++){
          if(colors[i]){
               squares[i].style.backgroundColor = colors[i];
          }else{
               squares[i].style.display = 'none';
          }
     }

});

hardBtn.addEventListener('click', function(){
     hardBtn.classList.add('selected');
     easyBtn.classList.remove('selected');
     numOfSquares = 9;
     restartGame();
     numGuess.textContent = 3;
     colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;

     for(let i = 0; i < squares.length; i++){
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display = 'block';
          }
     
});


 resetButton.addEventListener('click', function(){
     colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     this.textContent = "New Colors";
     message.textContent = "";
     restartGame();
     numGuess.textContent = 3;
     h1.style.backgroundColor = "steelblue";
     for(let i = 0; i <squares.length; i++){
          
          squares[i].style.backgroundColor = colors[i];
          
     }
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i];

     squares[i].addEventListener('click', function(){
          let clickedColor =  this.style.backgroundColor

         if(clickedColor === pickedColor){
             message.textContent = "Correct!";
             resetButton.textContent = "Play Again?";
             changeColors(clickedColor);
             h1.style.background = clickedColor;
            
      }else if (clickedColor !== pickColor){
               numGuess.textContent --;
               guess --;
               this.style.backgroundColor = "#232323";
               message.textContent = "Try Again";
               if(guess == 0){
                    alert("0 Guess remaining, Game Over");
                    restartGame();
               }

          }
            
     });

}

function changeColors(color){
     for(let i = 0; i < squares.length; i++){
          squares[i].style.backgroundColor = color;
     }
}

function pickColor(){
     let random = Math.floor(Math.random() * colors.length);
     return colors[random];
}

function generateRandomColors(num){
     let arr = [];
     for(let i = 0; i < num; i++){
          arr.push(randomColor());
     }
     return arr;
}

function randomColor(){
     let r = Math.floor(Math.random() * 256);
     let g = Math.floor(Math.random() * 256);
     let b = Math.floor(Math.random() * 256);
     
     return "rgb(" + r + ", " + g + ", " + b + ")" 
}

function restartGame(){
    guess = 3;
     colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     this.textContent = "New Colors";
     numGuess.textContent = 3;
     message.textContent = "";
     h1.style.backgroundColor = "steelblue";

     for(let i = 0; i <squares.length; i++){
          squares[i].style.backgroundColor = colors[i];
     }
              
}