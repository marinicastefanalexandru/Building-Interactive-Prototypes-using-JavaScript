//JavaScript
var userName = window.prompt("Please enter your name:");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

var num1 = window.prompt("Enter first number: ");
var num2 = window.prompt("Enter second number: ");

var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");

span1.innerHTML = num1;
span2.innerHTML = num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

console.log(typeof sum, typeof difference);
document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The mod result of " + num1 + " and " + num2 + " is " + modResult;


