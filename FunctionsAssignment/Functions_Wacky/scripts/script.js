/**
 * Created by michael on 11/12/14.
 */
alert("Hello, and thank you for visiting my page");
function casino(){
    var spinnerOne = Math.floor(Math.random()*3);
    var spinnerTwo = Math.floor(Math.random()*3);
    var spinnerThree = Math.floor(Math.random()*3);
    document.write(spinnerOne + "..." + spinnerTwo + "..." + spinnerThree);
    if(spinnerOne == spinnerTwo && spinnerOne == spinnerThree){
        var again = prompt("All three numbers match! You win the jackpot!! To spin again, type 'again'");
        while(again.length == 0){
            var again = prompt("You did not enter anything. To play again, type 'again");
        }if(again == "again"){
            casino();
        }
    }
}
