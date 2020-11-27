var time = new Date().getTime()
var click = document.getElementsByClassName("load")[0];
var boom = document.getElementsByClassName("kaboom")[0];
var scream = document.getElementsByClassName("gwak");
var cluck = document.getElementsByClassName("turkey")[0];
var clack = document.getElementsByClassName("text");
var bye = document.getElementsByClassName("note")[0];
var nope = document.getElementsByClassName("broken")[0];

function check() {
	if (time < 1606377600000 || time >= 1606464000000) {
		console.log("It is not Thanksgiving!")
		console.log("This command will activate the Thanksgiving sequence if you really came all this way to see it (again):")
		console.log("backup()")
	}
}

function load() {
	click.style.display = "none"

	$(document).ready(function() {
		gwak();
	}, 1000);

	function gwak() {
		if (time >= 1606377600000 && time < 1606464000000) {
			scream[0].volume = 0.35
			scream[1].volume = 0.25
			cluck.style.display = "block"
			setTimeout(function(){scream[0].play();}, 500);
			setTimeout(function(){clack[0].style.display = "block"; clack[0].classList.toggle("show");}, 5000);
			setTimeout(function(){clack[0].classList.toggle("hide");}, 23000);
			setTimeout(function(){clack[1].style.display = "block"; clack[1].classList.toggle("show");}, 25000);
			setTimeout(function(){clack[1].classList.toggle("hide");}, 33000);
			setTimeout(function(){clack[2].style.display = "block"; clack[2].classList.toggle("show");}, 35000);
			setTimeout(function(){clack[2].classList.toggle("hide");}, 53000);
			setTimeout(function(){clack[3].style.display = "block"; clack[3].classList.toggle("show");}, 55000);
			setTimeout(function(){clack[3].classList.toggle("hide");}, 63000);
			setTimeout(function(){clack[4].style.display = "block"; clack[4].classList.toggle("show");}, 65000);
			setTimeout(function(){clack[4].classList.toggle("hide");}, 68000);
			setTimeout(function(){clack[5].style.display = "block"; clack[5].classList.toggle("show");}, 70000);
			setTimeout(function(){boom.style.display = "block"; scream[1].play();}, 74000);
			setTimeout(function(){window.close()}, 75000);
			setTimeout(function(){boom.style.display = "none"}, 75300);
			setTimeout(function(){nope.style.display = "block"; nope.classList.toggle("show");}, 76000);
		} else {
			setTimeout(function(){bye.style.display = "block"; bye.classList.toggle("show")}, 1000);
			setTimeout(function(){boom.style.display = "block"; scream[1].play();}, 4000);
			setTimeout(function(){window.close()}, 5000);
			setTimeout(function(){boom.style.display = "none"}, 5300);
			setTimeout(function(){nope.style.display = "block"; nope.classList.toggle("show");}, 6000);
		}
	}
}

function backup() {
	click.style.display = "none"
	scream[0].volume = 0.35
	scream[1].volume = 0.25
	cluck.style.display = "block"
	setTimeout(function(){scream.play();}, 500);
	setTimeout(function(){clack[0].style.display = "block"; clack[0].classList.toggle("show");}, 5000);
	setTimeout(function(){clack[0].classList.toggle("hide");}, 23000);
	setTimeout(function(){clack[1].style.display = "block"; clack[1].classList.toggle("show");}, 25000);
	setTimeout(function(){clack[1].classList.toggle("hide");}, 33000);
	setTimeout(function(){clack[2].style.display = "block"; clack[2].classList.toggle("show");}, 35000);
	setTimeout(function(){clack[2].classList.toggle("hide");}, 53000);
	setTimeout(function(){clack[3].style.display = "block"; clack[3].classList.toggle("show");}, 55000);
	setTimeout(function(){clack[3].classList.toggle("hide");}, 63000);
	setTimeout(function(){clack[4].style.display = "block"; clack[4].classList.toggle("show");}, 65000);
	setTimeout(function(){clack[4].classList.toggle("hide");}, 68000);
	setTimeout(function(){clack[5].style.display = "block"; clack[5].classList.toggle("show");}, 70000);
	setTimeout(function(){boom.style.display = "block"; scream[1].play();}, 74000);
	setTimeout(function(){window.close()}, 75000);
	setTimeout(function(){boom.style.display = "none"}, 75300);
	setTimeout(function(){nope.style.display = "block"; nope.classList.toggle("show");}, 76000);
}