//El canvas
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");


var ball = function(){
    var dx, dy;
    var r;
    // var requestID;

    dx = Math.floor(Math.random() * 100) - 50 + c.width/2 ;
    dy = Math.floor(Math.random() * 100) - 50 + c.height/2 ;

    r = Math.floor(Math.random() * 60) + 20;

    console.log(dx);
    console.log(dy);
    console.log(r);

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
	ctx.arc(dx, dy, r, 0, Math.PI*2);
	ctx.stroke();
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
	console.log( "drawing complete" );
    };
    var drawTest = function(){
	ctx.beginPath();
	ctx.arc(dx, dy, 50 ,0,Math.PI*2);
	ctx.stroke();
	ctx.fillStyle="#FF0000";
	ctx.fill();
	ctx.closePath();
	console.log("here, here");
    };

    drawTest();
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


