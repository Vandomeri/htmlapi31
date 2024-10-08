const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 30

let paddleWidth = 75
let paddleHeight = 10
let paddleX = (canvas.width - paddleWidth) / 2


let leftPressed = false
let rightPressed = false


let ballRadius = 10

let dx = 2
let dy = -2


let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;


let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
        console.table(bricks)
    }
}


function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0
                }
            }

        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        leftPressed = true
    } else if (e.code === 'ArrowRight') {
        rightPressed = true
    }
})

document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft') {
        leftPressed = false
    } else if (e.code === 'ArrowRight') {
        rightPressed = false
    }
})



function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
}

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {

            if (bricks[c][r].status === 1) {
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }

        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (leftPressed && paddleX > 0) {
        paddleX += -7
    } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7
    }

    drawBall()
    drawPaddle()
    drawBricks()
    collisionDetection()
    if (y + dy < ballRadius) {
        dy = -dy
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }

    if (y + dy > canvas.height - ballRadius) {

        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
        } else {
            alert('проиграл')
            clearInterval(interval)
            document.location.reload()
        }

    }




    x += dx
    y += dy

}
var interval = setInterval(draw, 10);

