/**
 * Created by michael on 11/11/14.
 */
function entry() {
    var rad = prompt("please enter the radius of the circle to find the circumference.");
    while (rad.length == 0) {
        var rad = prompt("You did not enter anything. Please enter a number.");

    }while(isNaN(rad)){
        var rad = prompt("Your entry should be all numeric. Please enter a number.");

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
}
entry();
