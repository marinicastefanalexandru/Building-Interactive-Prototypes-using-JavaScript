var userName = window.prompt("Welcome to the Vacation Planner. Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + userName;

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

function calculateDays(){
	var daysInput = document.getElementById("days");
	var days = daysInput.value;

	var daysMessage = document.getElementById("daysMessage");
	if (days < 4){
		daysMessage.innerHTML = "Short trips are always worth it!";				
	}	
	else if (days < 7){
		daysMessage.innerHTML = "Cool, you'll be there for almost a week";
	}
	else{
		daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
	}

	var hours = days * 24;
	var minutes = hours * 60;
	var seconds = minutes * 60;
	var hoursMessage = document.getElementById("hoursMessage");
	var minutesMessage = document.getElementById("minutesMessage");
	var secondsMessage = document.getElementById("secondsMessage");

	hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours";
	minutesMessage.innerHTML = "Which means you'll be traveling for " + minutes + " minutes";
	secondsMessage.innerHTML = "Which means you'll be traveling for " + seconds + " seconds";

	var timingNext = document.getElementById("timingNext");
	timingNext.removeAttribute("hidden");

	timingNext.onclick = function(){
		document.getElementById("budgetSection").removeAttribute("hidden");
	};
};

