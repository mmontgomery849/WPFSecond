/**
 * Created by michael on 11/6/14.
 */
alert("Thank you for visiting my page");
function validateNumber(){
    var entry = prompt("Please enter a number between 1 and 100");//obtain user input and assign it's value to a variable
    if(entry.length < 1){
        alert("You did not enter anything. Let's try this again");
        validateNumber();}
        else if(Number(entry) > 100 || Number(entry) < 1){
           alert("You did not enter a number between 1 and 100. Let's try this again");
        validateNumber();
        }else if(Number(entry) >= 1 && Number(entry) <= 100){
        alert("Thank you!")
//ensure that number meets specified criteria using a series of if else statements
    }
    else{
        alert("Sorry. We were unable to process your entry. Let's try this again");
        validateNumber();
    }
    var entry2 = prompt("Now, please enter a number to multiply " + entry + " by.");//obtain second number from user and assign it to a new variable
    if(entry2.length == 0){
        alert("You did not enter anything. Let's start from the beginning.");
        validateNumber();
    }else if(Number(entry2) < 1 || Number(entry2) > 100){
        alert("You did not enter a number between between 1 and 100. Let's start from the beginning.");
        validateNumber();
    }//validates user input according to initially specified criteria
    var product = Number(entry) * Number(entry2);
    alert(entry + " multiplied by " + entry2 + " equals " + product + ".");//perform calculation with user-provided numbers and show result to end user
    alert("Let's do some other stuff with the first number you entered (" + entry +").");
    if(entry.length == 1){
        var plural = "digit"
    }else if(entry.length > 1){
        var plural = "digits"
    }//used if else statement to ensure that proper english would be used in the end result of the calculation
    alert("We know that " + entry + " consists of " + entry.length + " " + plural + ".");
    if(entry.length == 1){
        var add = prompt("Since 1 isn't that interesting of a number to work with, enter a number to add to 1.");
        if(add = 1){
            alert("We want a number other than 1. Let's start from the beginning.")
            validateNumber()
        }
        var sum = Number(add) + 1;
        var entry = sum;
        alert("Okay, great. So, " + entry + " is the number that we will be working with.");
    }else{
        var entry = entry.length
    }
    var multiplier = prompt("now, please enter a number to multiply " + entry + " by.");
    var times = multiplier * entry;
    alert(entry + " multiplied by " + multiplier + " equals " + times + ".");
}
validateNumber();

//uses if/else if statements
//logical operators
//prompt and alert
//length object







