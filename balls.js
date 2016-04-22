//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");


var colors = [ "#0000ff", " #ff3300", " #009933", " #ff00ff", " #ff661a", " #66ffff", " #669999" ," #000000"]

var requestID;
var r;
var dx;
var dy;
var down = true;
var right = true;


var ball = function(){
    //window.cancelAnimationFrame(requestID);

    dx = Math.floor(Math.random() * 601);
    dy = Math.floor(Math.random() * 601);

    r = Math.floor(Math.random() * 30) + 10;

    console.log(dx + ", "+ dy + ", " + r); 
    var getX = function(){
	return dx;
    };
    
    var getY = function(){
        return dy;
    };   

    var getR = function(){
	return r;
    };

    var draw = function(){

	ctx.clearRect(0,0,c.width, c.height);
	ctx.strokeRect(0,0,c.width, c.height);

	if (dy <= 0)
	    down = true;
	else if (dy >= c.height - r)
	    down = false;

	if (dx <= 0)
	    right = true;
	else if (dx >= c.width - r)
	    right = false;

	if (down)
	    dy += Math.random() + 1;

	else
	    dy -= Math.random() + 1;

	if (right)
	    dx += Math.random() + 1;

	else
	    dx -= Math.random() + 1;

	ctx.beginPath();
	ctx.arc(dx, dy, r ,0,Math.PI*2);
	ctx.stroke();
	var color = colors[Math.floor(Math.random() * colors.length)]
	ctx.fillStyle= color;
	ctx.fill();
	ctx.closePath();

	requestID = window.requestAnimationFrame(draw);
	//console.log(dx + ", "+ dy + ", " + r); 

    };
    
    //draw();

    return {
	x: "this is a string in a dict",
	getX: getX,
	getY: getY,
	getR: getR,
	draw: draw
    };
}

var n = Math.floor(Math.random() * 10) + 5
console.log(n);
var balls = new Array(n);
for (i=0; i<balls.length;i++){
    balls[i] = ball().draw();
};

console.log(balls);


