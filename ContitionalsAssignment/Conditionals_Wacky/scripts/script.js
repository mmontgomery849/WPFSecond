/**
 * Created by michael on 11/9/14.
 */
//greeting
alert("Thanks for visiting! \n I work for Apple and my buddy Ted and I are always seeing who has a bigger collection of Apple products...");
alert("Ted\'s a real one-upper and likes to say he has one more Apple device than me. I\'d like to see if you have more Apple devices than Ted");
//gather variables and assign them to user-provided values\
function runIt() {
    var iphone = prompt("How many iPhones do you own?");
    var mac = prompt("Okay, now how many Mac computers do you own?");
    var appTV = prompt("Enter the number of Apple TV's  you own:");
    var ipad = prompt("Finally, how many iPads and iPods do you own?");
    if (iphone.length == 0 || mac.length == 0 || appTV.length == 0 || ipad.length == 0) {
        alert("At least one of your entries was blank. If you own none of the device specified, please enter 0.")
        runIt();
    }
//perform calculation to determine how many apple devices Ted owns
    var yourTotal = Number(iphone) + Number(mac) + Number(appTV) + Number(ipad);
    var tedsApples = yourTotal + 1;//could also use ++ operator
//show result of calculation to end user and push to console.
    alert("You're not going to believe this. You own " + yourTotal + " Apple devices, and guess how many Ted says he owns: " + tedsApples + "! I think Ted might be a habitual liar.");
    console.log("It's no surprise that Ted claims to have " + tedsApples + " Apple devices upon hearing that you have " + yourTotal + " Apple devices. That's just the type of person Ted is.");
}
runIt();
//uses if/else if statements
//logical operators
//prompt and alert
//length object