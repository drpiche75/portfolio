function GetTime(){

let date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
let milisec = date.getMilliseconds();

hour = (hour < 10) ? "0" + hour : hour;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;
milisec = (milisec < 10) ? "0" + milisec : milisec;

let time = hour + ":" + min + ":" + sec + ":" + milisec

document.getElementById("clock").innerText = time; 
  var t = setTimeout(function(){ GetTime() }, 100); 

}

GetTime();