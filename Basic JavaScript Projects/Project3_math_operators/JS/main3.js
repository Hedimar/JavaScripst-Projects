function addition_Function(){  //Addition
    var addition = 2 + 2;  
    document.getElementById("Math").innerHTML="2 + 2 = " + addition;
}
function subtraction_Function(){  //Subtraction
    var Subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML="5 - 2 = " + Subtraction;
}
function multiplication(){
    var multiply = 6*8;
    document.getElementById("multiply").innerHTML="6 * 8 = " + multiply;
}
function division(){
    var divide= 48/6;
    document.getElementById("divide").innerHTML=" 48 / 6 =" + divide;
}
function more_Math(){
    var simple_Math = (1 + 2)*10/2-5;
    document.getElementById("multi").innerHTML="1 plus 2,multiplied by 10, divide in half and then subtracted by 5 equals " + simple_Math;
}
function Modulus_Operator(){
    var modulus= 25%6;
    document.getElementById("modulus").innerHTML="When you divide 25 by 6 you have a remainder of: " + modulus;
}
function negation_Operator(){ 
    var x = 10;
    document.getElementById("negation").innerHTML= -x;
}
function increment(){ //Increment
    var X = 5;   //Value
    X++; 
    document.getElementById("Increment_operator").innerHTML=X; //Result
}
function decrement(){ //Decrement
    var Y = 5.25;  //Value
    Y--;
    document.getElementById("Decrement_operator").innerHTML=Y; //Resukt
}
function random(){ // Random numbers from 0-100
    document.getElementById("Random").innerHTML= Math.random()*100;

}


