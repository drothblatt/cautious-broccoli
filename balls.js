//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");


var colors = [ "#0000ff", " #ff3300", " #009933", " #ff00ff", " #ff661a", " #66ffff", " #669999" ," #000000"]


var ball = function(){
    var dx, dy;
    var r;
    // var requestID;

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
	ctx.beginPath();
	ctx.arc(dx, dy, r ,0,Math.PI*2);
	ctx.stroke();
	var color = colors[Math.floor(Math.random() * colors.length)]
	ctx.fillStyle= color;
	ctx.fill();
	ctx.closePath();
	console.log("here, here");
    };

    draw();
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
    balls[i] = ball();
};

console.log(balls);


