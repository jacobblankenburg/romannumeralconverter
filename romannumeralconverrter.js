"use strict";

function getUSerNumber () {
	while (true){
		var usernumber;
		usernumber = prompt("Enter a number");
		if(isNaN(usernumber) || (usernumber === "") || (usernumber <= 0)) {
			alert("Enter a positive number");
		}
		else {
			return(usernumber);
		}
	}
}
function convertUsernum (usernumber) {
	var romanNumeral;
	romanNumeral = "";
	var realnumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	for (var i  = 0; i < realnumbers.length; i++){
		while (usernumber >= realnumbers [i]){
			romanNumeral += roman [i];
			usernumber -= realnumbers [i];
		}
	}
	alert(romanNumeral);
}
function main () {
	var usernumber;
	usernumber = getUSerNumber ();
	convertUsernum (usernumber);
}
main ();