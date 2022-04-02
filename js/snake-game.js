
const boardBorder = 'green';
const boardBackground = "green";
const snakeCol = 'green';
const snakeBorder = 'green' ;


let snake = [
  {x: 250, y: 200},
  {x: 230, y: 200},
  {x: 210, y: 200},
  {x: 190, y: 200},
  {x: 170, y: 200}
]

// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
// Return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
// Start game
main();

// main function called to keep the game running

function main() {
    clearCanvas();
    drawSnake();
}
// Draw a border around canvas

function clearCanvas() {
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
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  }


/*function drawSnake (snakePart) {
    snakeboard_ctx.fillStyle = 'green';
    snakeboard_ctx.strokestyle = 'green';
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y,10,10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y,10,10);
}



let score = 0;

// True if changing direction
let changingDirection = false;

// Horizontal velocity
let foodX;
let foodY;
let dx = 10;

// Vertical velocity
let dy = 0;



genFood();

document.addEventListener("keydown", changingDirection);

// main function called repeatedly to keep the game running
function main() {

    if (game0ver()) return;
    changingDirection = false;
    setTimeout(function onTick() {
        clearBoard();
        moveSnake();
        drawSnake();
    // repeat
        main();
    },100);    
}

// draw a border around the canvas
function clearBoard() {
  //  Select the colour to fill the drawing
  snakeboard_ctx.fillStyle = boardBackground;
  //  Select the colour for the border of the canvas
  snakeboard_ctx.strokestyle = boardBorder;
  // Draw a "filled" rectangle to cover the entire canvas
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  // Draw a "border" around the entire canvas
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}



function drawFood() {
    snakeboard_ctx.fillStyle = 'darkgreen';
    snakeboard_ctx.strokestyle = 'red';
    snakeboard_ctx.fillRect(foodX,10,10);
    snakeboard_ctx.strokeRect(foodY,10,10);
}



function game0ver() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y);
        return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width -10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height -10;
    return hitBottomWall || hitLeftWall || hitRightWall || hitTopWall
}

function randomFood(min,max) {
    return Math.round((Math.random() * (max,min) + min) / 10) * 10;
}

function genFood () {
    //generate a random number the food x- coordinate
    foodX = randomFood(0,snakeboard.width - 10);
    //generate a random number the food y- coordinate
    foodY = randomFood(0,snakeboard.height - 10);
    // if the new food location is where the snake is generate a new food location
    snake.forEach(function eatenFood (part){
        const hasEaten = part.x == foodX && part.y == foodY;
        if(eatenFood) genFood(); 
    });
}

function changeDirection(event) {
    const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;

// Prevent the snake form reversing
   if (changingDirection) return;
    changingDirection = true;
    const keyPressed = event.KeyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === leftKey && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed = upKey && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed = rightKey && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed = downKey && !goingUp) {
        dx = 0;
        dy = 10;
    }

}

    function moveSnake() {
    // Create the new Snake's head
        const head = {x: snake[4].x + dx, y: snake[4].y + dy};
  // Add the new head to the beginning of snake body
        snake.unshift(head);
        const eatenFood = snake[0].x === foodX && snake[0].y === foodY;
        if(eatenFood) {
            // increase score
            score +=10;
            // Display score on screen
            document.getElementById('score').innerHTML = score;
            // generate new food location
            genFood();
        } else {
            // remove the last part of snake body
            snake.pop();
        }
       
    }
*/