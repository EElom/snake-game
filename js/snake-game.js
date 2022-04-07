
const boardBorder = 'green';
const boardBackground = "white";
const snakeCol = 'green';
const snakeBorder = 'green' ;


let snake = [
  {x: 250, y: 200},
  {x: 230, y: 200},
  {x: 210, y: 200},
  {x: 190, y: 200},
  {x: 170, y: 200}
]

let score = 0;

// Horizontal velocity
let dx = 10;
let foodX;
let foodY;

// Vertical velocity
let dy = 0;




// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
// Return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
// Start game
main();



// main function called to keep the game running

function main() {
        setTimeout(function onTick(){
        clearBoard();
        drawFood();
        moveSnake();
        drawSnake();
        // call main again
        main();
    },100);
}

// Draw a border around canvas

function clearBoard() {
    // colour to fill the drawing
    snakeboard_ctx.fillStyle = boardBackground;
    //colour for the border canvas
    snakeboard_ctx.strokestyle = boardBorder;
    //  Draw  a filled rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0,0, snakeboard.width, snakeboard.height);
    // Draw a border around the entire canvas
    snakeboard_ctx.strokeRect(0,0, snakeboard.width,snakeboard.height);
}

// Draw the snake on the canvas
function drawSnake() {
    snake.forEach(drawSnakePart);
}

// Draw one snake part
function drawSnakePart(snakePart) {

    // Set the colour of the snake part
    snakeboard_ctx.fillStyle = snakeCol;
    // Set the border colour of the snake part
    snakeboard_ctx.strokestyle = snakeBorder;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
    // Draw a border around the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
  }


  let changingDirection = false;

  function changeDirection(event) {
    const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;


    const keyPressed = event.keyCode;
    const goingUp = dy === -20;
    const goingDown = dy === 20;
    const goingRight = dx === 20;
    const goingLeft = dx === -20;

    if (keyPressed === leftKey && !goingRight) {
        dx = -20;
        dy = 0;
    }

    if (keyPressed === upKey && !goingDown) {
        dx = 0;
        dy = -20;
    }

    if (keyPressed === rightKey && !goingLeft) {
        dx = 20;
        dy = 0;
    }

    if (keyPressed === downKey && !goingUp) {
        dx = 0;
        dy = 20;
    }
  }

  document.addEventListener("keydown", changeDirection);

  function game0ver() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y);
        return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width -20;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height -20;
    return hitBottomWall || hitLeftWall || hitRightWall || hitTopWall
}




// Draw food

function drawFood() {
    snakeboard_ctx.fillStyle = 'red';
    snakeboard_ctx.strokestyle = 'red';
    snakeboard_ctx.fillRect(foodX, foodY, 20,20);
    snakeboard_ctx.strokeRect(foodX, foodY, 20,20);
}

genFood();



function randomFood(min, max) {
    return Math.round ((Math.random() * (max-min) + min) / 20) * 20
}

function genFood() {
    // generate ab random number for the food x coordinate
    foodX = randomFood(0,snakeboard.width -20);

    //generate a random number for the food Y coordinate
    foodY =randomFood(0, snakeboard.height -20);

    // if the new food is where the snake is generate a new food location

    snake.forEach(function eatenFood(part){
        const eatenFood = part.x === foodX && part.y === foodY;
        if(eatenFood) genFood();
    });

}


function moveSnake() {
    //create the new snake head
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // add the new head to the snake body
    snake.unshift(head);
    const eatenFood = snake[0].x === foodX && snake[0].y === foodY;
    if(eatenFood) {
        //increase score
        score +=10;
        //Display score on screen
        document.getElementById('score').innerHTML = score;
        //generate new food location
        genFood();
    } else {
    //remove the last part of snake body
    snake.pop();
    }
}

    
    
