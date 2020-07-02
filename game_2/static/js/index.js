const canvas = document.querySelector(".snake_canvas");
const scanvas = canvas.getContext("2d");

const rows = canvas.height / 10;
const colums = canvas.width / 10;

var snake;


function Snake(){
	this.x = 0;
	this.y = 0;
	this.xSpeed = 10;
	this.ySpeed = 0;
	this.Score = 0;
	this.tail = [];

	this.draw = function () {
		scanvas.fillStyle = "#FFFFFF";

		for (let i = 0; i < this.tail.length; i++){
			scanvas.fillRect(this.tail[i].x, this.tail[i].y, 10, 10);
		}

		scanvas.fillRect(this.x, this.y, 10, 10);
	}

	this.update = function() {
		for (let i = 0; i < this.tail.length -1; i++){
			this.tail[i] = this.tail[i + 1];
		}

		this.tail[this.Score - 1] = { x: this.x, y: this.y };


		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x > canvas.width){
			this.x = 0;
		}
		if(this.y > canvas.height){
			this.y = 0;
		}
		if(this.x < 0){
			this.x = canvas.width;
		}
		if(this.y < 0){
			this.y = canvas.height;	
		}
	}
	this.changeDir = function(dir) {
		switch(dir) {
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = -10;
				break;

			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = 10;
				break;
				
			case 'Left':
				this.xSpeed = -10;
				this.ySpeed = 0;
				break;
				
			case 'Right':
				this.xSpeed = 10;
				this.ySpeed = 0;
				break;
		}
	}
	
	this.eat = function (loc) {
		if(this.x === loc.x && this.y === loc.y){
			this.Score++;
			return true;
		}

		return false;
	}
}


function Setup() {
	snake = new Snake();
	point = new randomPoint();

	point.loc();
	console.log(point);

	window.setInterval(() => 
	{
		scanvas.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		snake.draw();
		point.draw();

		if(snake.eat(point)){
			point.loc();
			point.draw();
		}
	}, 250);
}

function randomPoint() {
	this.x;
	this.y;

	this.loc = function () {
		this.x = (Math.floor(Math.random() * rows -1) + 1) * 10;
		this.y = (Math.floor(Math.random() * colums -1) + 1) * 10;

	}

	this.draw = function() {
		scanvas.fillStyle = "#FF0000";
		scanvas.fillRect(this.x, this.y, 10, 10);
	}
}


window.addEventListener('keydown', ((evt) => {
	const dir = evt.key.replace('Arrow', '');
	snake.changeDir(dir);
}))