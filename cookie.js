var display = 0;
var score = 0;
var cookie = document.getElementById("cookie");
var multiplier = 1;
var multiply = document.getElementById("multiply");
var multiplierCout = 50;

document.getElementById("display").innerHTML=score;

function clic() {
    score += multiplier;
    document.getElementById("display").innerHTML=score;
}

document.getElementById("counter").innerHTML=multiplier;
document.getElementById("cout").innerHTML=multiplierCout;

function augmenterMultiplicateur() {
	if (score <= multiplierCout) {
		mulitplier == multiplier
	}
    else {
    	multiplier += 1;
    	score = score - multiplierCout;
    	multiplierCout = multiplierCout * 2;
    }

document.getElementById("counter").innerHTML=multiplier;
document.getElementById("cout").innerHTML=multiplierCout;
}

