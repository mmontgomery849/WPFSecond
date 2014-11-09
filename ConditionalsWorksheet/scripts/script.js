/**
 * Created by michael on 11/06/14.
 */

alert("Let's see if you have enough gas to make it across the desert");
//prompt for user to specify variables
var mpg = prompt("How many miles to the gallon does your vehicle get?");
var gallons = prompt("Thanks. Now, how many gallons of gas is your tank capable of holding?");
var remaining = prompt("Okay. Based on your vehicle's gas gauge, what percent of gas do you have remaining in your tank?");
//use variables to calculate number of miles left in tank
var milesLeft = Number((gallons) * Number(remaining)) * Number(mpg);
//create conditional statement that pushes out info based on result of previous calculation
if(milesLeft > 199){
    alert("Yes, you can make it without stopping for gas!")
    console.log("Yes, you can make it without stopping for gas!")
}else{
    alert("Better get gas now while you can!")
    console.log("Better get gas now while you can!")
}
alert("Next, let's calculate the grade you have earned in the class of your choice.");
//prompt user to input numeric grade for evaluation and assign variable to user input
var points=prompt("Please enter the number of points that you have earned");
console.log("User has entered a value of " +points+ ".");
//create a conditional if statement and display results in console and alerts
if (Number(points) > 94 && Number(points) < 101){
    alert("You have a " +points+ "%, which means you have earned an A+ in this class");
    console.log("You have a " +points+ "%, which means you have earned an A+ in this class")
}else if(Number(points) > 89 && Number(points) < 95){
    alert("You have a " +points+ "%, which means you have earned an A in this class");
    colsole.log("You have a " +points+ "%, which means you have earned an A in this class")
}else if(Number(points) > 84 && Number(points) < 90) {
    alert("You have a " + points + "%, which means you have earned a B+ in this class");
    console.log("You have a " +points+ "%, which means you have earned a B+ in this class")
}else if(Number(points) > 79 && Number(points) < 85) {
    alert("You have a " + points + "%, which means you have earned a B in this class");
    console.log("You have a " +points+ "%, which means you have earned a B in this class")
}else if(Number(points) > 75 && Number(points) < 80) {
    alert("You have a " + points + "%, which means you have earned a C+ in this class");
    console.log("You have a " +points+ "%, which means you have earned a C+ in this class")
}else if(Number(points) > 72 && Number(points) < 76) {
    alert("You have a " + points + "%, which means you have earned a C in this class");
    console.log("You have a " +points+ "%, which means you have earned a C in this class")
}else if(Number(points) > 69 && Number(points) < 73) {
    alert("You have a " + points + "%, which means you have earned a D in this class");
    console.log("You have a " +points+ "%, which means you have earned a D in this class")
}else if(Number(points) > -1 && Number(points) < 70) {
    alert("You have a " + points + "%, which means you have earned an F in this class");
    console.log("You have a " +points+ "%, which means you have earned an F in this class")
}else{
    alert("We are unable to process your request at this time. Please try again later.")
}

alert("A trip to the movie theater is always fun. Let's see how much your ticket will cost.");
var price = 12;
var age = prompt("Please enter your age.");
var time = prompt("Thank you. Now, in 24-hour format, please enter the time you will go see your film.\(Example: 3:00PM is 1500\)");
if(Number(age) > 54){
    var price = 7
}else if
    (Number(time) > 1499 && Number(time) <1701){
    var price = 7
}
alert("The ticket price is $" +price+ ".00");
console.log("The ticket price is $" +price+ ".00")




