
  var LightRED = document.getElementsByClassName('red');
    var LightYELLOW = document.getElementsByClassName('yellow');
    var LightGREEN = document.getElementsByClassName('green');
function trafficLight() {
  
function lights1() {
    
    LightRED[0].style.background = "red";
    LightYELLOW[0].style.background = "#ccc";
    LightGREEN[0].style.background = "#ccc";
    
}
var setLight1 = setInterval(lights1, 0)

function lights2() {
    
    LightRED[0].style.background = "#ccc";
    LightYELLOW[0].style.background = "yellow";
    LightGREEN[0].style.background = "#ccc";
    clearInterval(setLight1);
}
var setLight2 = setInterval(lights2, 5000)

function lights3() {
;
    LightRED[0].style.background = "#ccc";
    LightYELLOW[0].style.background = "#ccc";
    LightGREEN[0].style.background = "green";
    clearInterval(setLight2);
    clearInterval(setLight3);
   
}
var setLight3 = setInterval(lights3, 7000);

}
trafficLight()
setInterval(trafficLight,12000);