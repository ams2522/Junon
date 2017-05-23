/**
 * 
 */

var xlim = 100;
var ylim = 100;
var x,y;

function initMap() {
	if(!x && (x !== 0))
		x = 30;
	if(!y && (y !== 0))
		y = 30;
	
	document.getElementById("xpos").innerHTML = x;
	document.getElementById("ypos").innerHTML = y;
}

function action(command) {
	if(command === "north"){
		if(y < ylim)
			y++;
	}
	else if(command === "south"){
		if(y > 0)
			y--;
	}
	else if(command === "east"){
		if(x < xlim)
			x++;
	}
	else if(command === "west"){
		if(x > 0)
			x--;
	}
	document.getElementById("xpos").innerHTML = x;
	document.getElementById("ypos").innerHTML = y;
}

initMap();


