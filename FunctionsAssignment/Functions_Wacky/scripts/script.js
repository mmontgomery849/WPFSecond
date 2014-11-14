/**
 * Created by michael on 11/12/14.
 */
alert("Hello, and thank you for visiting my page");
function casino(){
    var spinnerOne = Math.floor(Math.random()*3);
    var spinnerTwo = Math.floor(Math.random()*3);
    var spinnerThree = Math.floor(Math.random()*3);
    if(spinnerOne == spinnerTwo && spinnerOne == spinnerThree){
        var again = prompt(spinnerOne +" - " + spinnerTwo + " - " + spinnerThree + ". All three numbers match! You win the jackpot!! To spin again, type 'again'");
        while(again.length == 0){
            var again = prompt("You did not enter anything. To play again, type 'again");
        }if(again == "again"){
            casino();
        }while(again == null || again != "again"){
            var again = prompt("invalid entry. To spin again, type 'again");
        }
    }else if(spinnerOne != spinnerTwo || spinnerOne != spinnerThree){
        var again = prompt(spinnerOne +" - " + spinnerTwo + " - " + spinnerThree +". Sorry, your numbers did not match. type 'again' to spin again");
    }while(again.length == 0){
        var again = prompt("You did not enter anything. To play again, type 'again");
    }if(again == "again"){
        casino();
    }while(again == null || again != "again"){
        var again = prompt("invalid entry. To spin again, type 'again");
    }
}
alert("We are going to play a slot machine simulation. Next we will have 3 random numbers between 0 and 3 generated. If they match, you win. You can play as many times as you would like.");
casino();
