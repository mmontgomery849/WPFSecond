/**
 * Created by michael on 11/12/14.
 */
alert("Hello, and thank you for visiting my page");
alert("The average picture is 8MB in size. Everyone in technology knows that 1,024 MB equals 1GB");
alert("We are going to calculate the space needed to store a number of pictures you provide.");
function calculateStorage(){
    var pics = prompt("Please enter the number of pictures you have to store");
    while(pics.length == 0){
        var pics = prompt("You did not enter anything. Please enter the number of pictures you ave to store.");
    }while(isNaN(pics)){
        var pics = prompt("Invalid entry. should enter a number indicating how many pictures you would like to store")
    }
    var divisor = (Number(pics) * 8) / 1024;
    if((Number(pics) * 8) % 1024 > 0){
        divisor++
    }
    alert("Assuming that your photos are the average size of 8MB, you will need " + Math.ceil(divisor) + "GB to store them");
}
calculateStorage();
