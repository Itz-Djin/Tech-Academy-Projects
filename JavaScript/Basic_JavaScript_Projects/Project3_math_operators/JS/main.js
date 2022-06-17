function add() {
    var addition = 5 + 5;
    document.getElementById('Math').innerHTML = '5 + 5 =  ' + addition;
}

function sub() {
    var subtraction = 50 - 25;
    document.getElementById('Math2').innerHTML = '50 - 25 = ' + subtraction;
}

function multiply() {
    var multi = 5 * 5;
    document.getElementById('Multi').innerHTML = '5 * 5 = ' + multi;
}

function divide() {
    var divsion = 25 / 5;
    document.getElementById('Division').innerHTML = ' 25 / 5 = ' + divsion;
}

function equation() {
    var expression = (5 + 5) * 5 / 2 - 5;
    document.getElementById('Maths').innerHTML = '5 plus 5 then multiplied by 5, divided by 2 then minus another 5 equals ' + expression;
}

function modulus() {
    var mod = 9 % 4;
    document.getElementById("Modulus").innerHTML = "When the dividen is 9 and the divisor is 4 you are left with a remainder of: " + mod;
}

function negation() {
    var A = 9;
    document.getElementById("Unary").innerHTML = -A;
}

function incrementFunction() {
    var B = 99;
    B++;
    document.getElementById('Increment').innerHTML = B;
}

function decrementFunction() {
    var C = 100;
    C--;
    document.getElementById('Decrement').innerHTML = C;
}

//The math object method in JS allows you to perform mathematical tasks on numbers
