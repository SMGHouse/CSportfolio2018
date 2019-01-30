var num1 = document.getElementById("num1");
//makes variable for input1
var num2 = document.getElementById("num2");
//variable for input2
var operator = document.getElementById("operator");
//variable for operator
var calculator = document.getElementById("calculator");
//variable for calculator
var display = document.getElementById("display");
//variable for div
calculator.addEventListener("click", function(){
//makes function if mouse is clicked
var number1 = +num1.value;
var number2 = +num2.value;
var op = operator.value;
//stores variables into values
if(op === "+"){
    display.innerHTML= number1 + number2;
}

});