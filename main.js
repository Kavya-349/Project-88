var canvas = new fabric.Canvas('myCanvas');

var ball_x = 30;
var ball_y = 30;
var goal_x = 750;
var goal_y = 400;

block_image_width = 5;
block_image_height = 5;

var hole_object = "";
var ball_object = "";

function load_img() {
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);

		hole_object.set({
			top: goal_y,
			left: goal_x
		});
		canvas.add(hole_object);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Imga){
		ball_object = Imga;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);

		ball_object.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_object);
	})	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x == goal_x) && (ball_y == goal_y)) {
		document.getElementById("hd3").innerHTML = "You have hit the Goal!!";
		document.getElementById("myCanvas").style.borderColor = "red";
		canvas.remove(ball_object);
		
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y > 15) {
			ball_y = ball_y - block_image_height;
			console.log("When up arrow is pressed, x = "+ball_x+" y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function down()
	{
		if(ball_y <= 550) {
			ball_y = ball_y + block_image_height;
			console.log("When down arrow is pressed, x = "+ball_x+" y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function left()
	{
		if(ball_x > 15)
		{
			ball_x = ball_x - block_image_width;
			console.log("When left arrow is pressed, x = "+ball_x+" y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function right()
	{
		if(ball_x <= 1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("When right arrow is pressed, x = "+ball_x+" y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}
	
}

