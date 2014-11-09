/**
 * Created by michael on 11/09/14.
 */

    alert("Thank you for visiting my page!");//greeting
    alert("In the technology industry, screen and digital image quality are increasingly important factors");
    alert("You can use this tool to calculate the PPI or pixel density of a digital display");
    //obtain screen dimensions from user input and assign variables to given values
function task() {
    var height = prompt("Start by entering the number of pixels that your screen is high:");
    var length = prompt("Got it; thanks! Now, enter the number of pixels that your screen is wide:");
    //validate input and ensure that input meets required criteria
    if (height > length){
        alert("You stated that your display is taller than it is wide. This is highly unlikely. Let's start from the beginning.");
        task();
    }else if(height.length == 0 || length.length == 0){
        alert("One of your entries was blank. Let's start from the beginning.");
        task();
    }
        var inches = prompt("Thanks, again! Please enter the number of inches that your screen is:");
    var ppi = (Number(height) * Number(length)) / Number(inches);//perform ppi calculation and push to console and web document.
    console.log("Since your display is " + height + " pixels high and " + length + " pixels wide, the pixel density of your display is " + ppi + ".");
    document.write("Since your display is " + height + " pixels high and " + length + " pixels wide, the pixel density of your display is " + ppi + ".");
}
task();