/**
 * Created by michael on 11/12/14.
 */
alert("Hello, and thank you for visiting my page");
function shift(){
    var integer = Math.ceil(Math.random()*3);
    if(integer == 0){
        document.getElementsByTagName('body').style.backgroundColor = "green";
    }else if(integer == 1){
        document.getElementsByTagName('body').style.backgroundColor = "blue";
    }else if(integer == 2){
        document.getElementsByTagName('body').style.backgroundColor = "black";
    }else if(integer == 3){
        document.getElementsByTagName('body').style.backgroundColor = "red";
    }
    alert("Let's randomly generate another background color");
    shift();
}
shift();