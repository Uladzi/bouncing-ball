const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const Ball = function() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = -2;
    this.ySpeed = 3;
};

const circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, fillCircle);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};
Ball.prototype.draw = function() {
    circle(this.x, this.y, 3, true);
};
Ball.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};
Ball.prototype.checkCollision = function() {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

const ball = new Ball();

setInterval(function() {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ball.checkCollision();
    ctx.strokeRect(0, 0, width, height);
}, 30);