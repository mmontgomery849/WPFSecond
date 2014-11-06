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

}
validateNumber();



