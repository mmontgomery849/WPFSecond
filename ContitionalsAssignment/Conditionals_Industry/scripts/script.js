/**
 * Created by michael on 11/09/14.
 */
alert("Thank you for visiting my page!");
alert("In the technology industry, screen and digital image quality are increasingly important factors");
alert("You can use this tool to calculate the PPI or pixel density of a digital display");
var height=prompt("Start by entering the number of pixels that your screen is high:");
var length=prompt("Got it; thanks! Now, enter the number of pixels that your screen is wide:");
var inches=prompt("Thanks, again! Please enter the number of inches that your screen is:");
var ppi=(Number(height) * Number(length)) / Number(inches);
console.log("Since your display is " + height + " pixels high and " + length + " pixels wide, the pixel density of your display is " + ppi + ".");
document.write("Since your display is " + height + " pixels high and " + length + " pixels wide, the pixel density of your display is " + ppi + ".");
