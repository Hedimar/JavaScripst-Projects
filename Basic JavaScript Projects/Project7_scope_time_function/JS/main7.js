//This is a global variable
var X = 10;
function number_1(){
    document.write(20 + X + "<br>");
}
function number_2(){
    document.write(X + 100 + "<br>");
}
number_1();
number_2();

//This is a local variable
function number_1(){
    var X=10;
    document.write(20 + X + "<br>");
}
function number_2(){
    document.write(X + 100);
}
number_1(); //The result would be 30
number_2();

//console.log method
function number_1(){
    var X = 10;
    console.log(15 + X);
}
function number_2(){
    console.log(X + 100);
}
number_1();
number_2();

//if statement
function Time(){
    if (new Date().getHours()< 23){
        document.getElementById("Greet").innerHTML="How are you?"
    }
}

//if else statement
function Age_input(){
    Age = document.getElementById("Age").value;
    if (Age >=18){
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old").innerHTML= Vote;
}

//Else if statement
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time < 18){
        Reply = "It is afternoon!";
    }
    else{
        Reply = "It is evening time!";
    }
    document.getElementById("Time").innerHTML=Reply;
}