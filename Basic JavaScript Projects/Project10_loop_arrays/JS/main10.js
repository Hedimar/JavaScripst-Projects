//While Loop
function Call_loop(){
    var digit = "";
    var X = 1;
    while(X < 11){
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML=digit;
}
//For Loop
var instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","FLute"]
var Content="";
var Y;
function for_loop(){
    for (Y = 0; Y < instruments.length; Y++){
        Content += instruments [Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML=Content;
}
//Array
function array_function(){
    var Car = [];
    Car [0] = "Engine On";
    Car [1] = "Lights On";
    Car [2] = "Engine Off";
    Car [3] = "Lights Off";
    document.getElementById("Array").innerHTML = "The Car has its " + Car [1] + ".";
}
function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black",};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;

}
var X=82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//Objects
let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description : function (){
        return "The car is a " + this. year +  this. color + this. make + this. model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();