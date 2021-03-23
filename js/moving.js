
var Canvas = document.getElementById("canvas");
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
var can = Canvas.getContext("2d");

function randNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function ball(clientX, clientY) {
    this.ballX = clientX;
    this.ballY = clientY;
    this.ballR = randNum(50, 80);
    this.speedX = randNum(-10,10);
    this.speedY = randNum(-5, 5);
    this.ballColor = "rgb(" + randNum(0, 255) + "," + randNum(0, 255) + "," + randNum(0, 255) + ")";

    this.draw = function() {
        can.beginPath();
        can.arc(this.ballX, this.ballY, this.ballR, 0, 2 * Math.PI, true);
        can.fillStyle = this.ballColor;
        can.fill();
        can.closePath();
    };

    this.move = function() {
        this.ballX += this.speedX;
        this.ballY += this.speedY;
        this.ballR = this.ballR /1.05;
    }
}

var ballArr = [];
Canvas.onmousemove = function() {
    for (var i = 0; i < 10; i++) {
        ballArr.push(new ball(event.clientX, event.clientY));
    }
};
var call = setInterval(function() {
    can.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (i = 0; i < ballArr.length; i++) {
        if (ballArr[i].ballR < 1) {
            ballArr.splice(i, 1);
        }
        ballArr[i].draw();
        ballArr[i].move();
    }
}, 1)