/**
 * Created by michael on 11/6/14.
 */
alert("Thank you for visiting my page");
function validateNumber(){
    var entry = prompt("Please enter a number between 1 and 100");
    if(entry.length < 1){
        alert("You did not enter anything. Let's try this again");
        validateNumber();}
        else if(Number(entry) > 100 || Number(entry) < 1){
           alert("You did not enter a number between 1 and 100. Let's try this again");
        validateNumber();
        }else if(Number(entry) >= 1 && Number(entry) <= 100){
        alert("Thank you!")

    }
    else{
        alert("Sorry. We were unable to process your entry. Let's try this again");
        validateNumber();
    }
    var entry2 = prompt("Now, please enter a number to multiply " + entry + " by.");
    if(entry2.length == 0){
        alert("You did not enter anything. Let's start from the beginning.");
        validateNumber();
    }else if(Number(entry2) < 1 || Number(entry2) > 100){
        alert("You did not enter a number between between 1 and 100. Let's start from the beginning.");
        validateNumber();
    }
    var product = Number(entry) * Number(entry2);
    alert(entry + " multiplied by " + entry2 + " equals " + product + ".");
    alert("Let's do some other stuff with the first number you chose (" + entry +").");
    if(entry.length == 1){
        var plural = "digit"
    }else if(entry.length == 2){
        var plural = "digits"
    }
    alert("We know that " + entry + " consists of " + entry.length + " " + plural + ".")
}
validateNumber();







