var userName = window.prompt("Welcome to the Vacation Planner. Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + userName;

//change background image
var pics = ["pics/pic1", "pics/pic2", "pics/pic3", "pics/pic4"];
var currentImage = 0;
setInterval(changeImage, 3000);
function changeImage(){
	currentImage ++;
	if (currentImage > pics.length - 1){
		currentImage = 0;
	}
	document.body.style.backgroundImage = "url(" + pics[currentImage] + ".jpg)";
};


//first section trip duration
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

//second section trip budget
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = calculateBudget;

function calculateBudget(){
	var budgetInput = document.getElementById("tripBudget");
	var budget = budgetInput.value;

	var tripExchange = document.getElementById("tripExchangeMsg");
	tripExchange.innerHTML = "That means you'll need " + Math.round(budget * 4.1) + " RON for your trip."


	var daysInput = document.getElementById("days");
	var days = daysInput.value;
	var dailyExchange = document.getElementById("dailyExchangeMsg");
	dailyExchange.innerHTML = "That means you can spend " + Math.round(budget * 4.1 / days) + " RON per day";

	var exchange10 = document.getElementById("exchange10Msg");
	exchange10.innerHTML = "You'll need " + 4.1 * 10 + " for an item that would cost you 10 USD";
	var exchange500 = document.getElementById("exchange500Msg");
	exchange500.innerHTML = "You'll need " + 4.1 * 500 + " for an item that would cost you 500 USD";

};

