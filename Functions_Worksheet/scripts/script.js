/**
 * Created by michael on 11/11/14.
 */
function entry() {
    var rad = prompt("please enter the radius of the circle to find the circumference.");
    if (rad.length == 0) {
        alert("You did not enter anything. Let's try this again.");
        entry();
    }else if(isNaN(rad)){
        alert("Please enter a number.");
        entry();
    }
    var circ = (Number(rad) * 2) * Math.PI;
    alert("The circumference of the circle is " + circ + ".");
    console.log("The circumference of the circle is " + circ + ".");
    document.write("The circumference of the circle is " + circ + ".");
}
entry();