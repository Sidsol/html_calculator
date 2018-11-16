var userName = window.prompt("What is your name?");

var greetingParagraph = document.getElementById("greeting");

greetingParagraph.innerHTML += ", " + userName;

var num1 = window.prompt("Enter a number?");
var num2 = window.prompt("Enter a second number?");

var operandOne = document.getElementById("operand1");
var operandTwo = document.getElementById("operand2");

operandOne.innerHTML += num1;
operandTwo.innerHTML += num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The modResult of " + num1 + " and " + num2 + " is " + modResult;