// JavaScript Document

var originalTitle = "JOIN OUR COMMUNITY";
var originalTitleLength = originalTitle.length;
var possibleChars = "/^0123456789!@#\$%\^\&*\)\(+=._-]+$"
var possibleCharsLength = possibleChars.length - 1;

function alterText() {
	var randomPosition = Math.floor(Math.random() * originalTitleLength);
	var randomCharacterPosition = Math.floor(Math.random() * possibleCharsLength);
		
	if (originalTitle[randomPosition] == " ") {
		randomPosition++;
	}
	var newText = originalTitle.substring(0, randomPosition) + possibleChars[randomCharacterPosition] + originalTitle.substring(randomPosition+1);
	
	document.getElementById("title").innerHTML = newText;
}

function returnText() {
	document.getElementById("title").innerHTML = originalTitle;
}
function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function toggleSomething() {
    var timeArray = new Array(150, 175, 200, 500, 1000, 1500, 3000);

    // do stuff, happens to use jQuery here (nothing else does)	
	alterText();
	setTimeout(returnText, 200);
	

    clearInterval(timer);
    timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 1000);
// 1000 = Initial timer when the page is first loaded
