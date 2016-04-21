//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");


var ball = function(){
    var dx, dy;
    var r;
    // var requestID;

    dx = Math.floor(Math.random() * 100) - 50 + ctx.width/2 ;
    dy = Math.floor(Math.random() * 100) - 50 + ctx.height/2 ;


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
	ctx.beingPath();
	ctx.arc(dx, dy, r, 0, Math.PI*2);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();
    };

    return {
	x: "this is a string in a dict",
	getX: getX,
	getY: getY,
	getR: getR,
	draw: draw
    };
}

var x = ball();
var y = ball();
