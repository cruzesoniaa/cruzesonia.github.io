const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define ball properties
let balls = [
	{ x: 50, y: 50, radius: 25, color: 'orange', velocity: { x: 5, y: 3 } },
	{ x: 200, y: 100, radius: 35, color: 'yellow', velocity: { x: -3, y: 7 } },
	{ x: 400, y: 150, radius: 20, color: 'purple', velocity: { x: 8, y: -5 } }
];

// define draw function
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < balls.length; i++) {
		// update ball position
		balls[i].x += balls[i].velocity.x;
		balls[i].y += balls[i].velocity.y;

		// check if ball hits the canvas edge
		if (balls[i].x + balls[i].radius > canvas.width || balls[i].x - balls[i].radius < 0) {
			balls[i].velocity.x = -balls[i].velocity.x;
		}

		if (balls[i].y + balls[i].radius > canvas.height || balls[i].y - balls[i].radius < 0) {
			balls[i].velocity.y = -balls[i].velocity.y;
		}

		// draw ball
		ctx.beginPath();
		ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
		ctx.fillStyle = balls[i].color;
		ctx.fill();
	}
}

// animate ball movement
function animate() {
	requestAnimationFrame(animate);
	draw();
}

animate();
