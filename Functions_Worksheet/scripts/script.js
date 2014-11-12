/**
 * Created by michael on 11/11/14.
 */
//calculate circumference of a circle
function entry() {
    var rad = prompt("please enter the radius of the circle to find the circumference.");
    while (rad.length == 0) {
        var rad = prompt("You did not enter anything. Please enter a number.");

    }while(isNaN(rad)){
        var rad = prompt("Your entry should be numeric. Please enter a number.");

    }
    var circ = (Number(rad) * 2) * Math.PI;
    alert("The circumference of the circle is " + Math.round(circ) + ".");
    console.log("The circumference of the circle is " + Math.round(circ) + ".");
    document.write("The circumference of the circle is " + Math.round(circ) + ".");
    repeat();

    function repeat() {
        var repeater = prompt("If you would like to repeat this activity, type 'again'. To proceed to the next activity, type 'next'.");
        if (repeater == "again") {
            entry();
        } else if (repeater == "next") {
            stings();
        } else if (repeater != "again" || repeater != "next") {
            repeat();
        }
    }
    //calculate bee stings required to kill an animal
    function stings(){
        var pounds = prompt("Please enter the weight of the animal in pounds to see how many bee stings it would take to kill the animal.");
        while(pounds.length == 0){
            var pounds = prompt("You did not enter anything. Please enter the weight of the animal in pounds");
        }while(isNaN(pounds)){
            var pounds = prompt("Your entry should be all numeric. Please enter the weight of the animal in pounds");
        }

        var answer = Number(pounds) / 8.666666667;
        var plurator = "sting";
        if(answer > 1){
            plurator = "stings"
        }
        alert("It takes " + Math.ceil(answer) + " bee " + plurator + " to kill this animal")
    }



}
entry();
