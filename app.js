// var a = document.getElementById("box");

// function shape(cls){
//     console.log("button click")
//     a.className = cls;
// }
// var parent = document.getElementById("parent");

// var a = parent.getElementsByTagName("P")
// console.log(a);




var min =0
var sec =0
var miliSec =0
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMiliSec = document.getElementById("displayMiliEc");

var interval;

function timer(){
   miliSec++;
   if(miliSec = 10)
    sec = 0;
    min = 0; 
};


function startTimer(){
    interval =
     setInterval(function
(){  
   timer();
},100);
};

function pauseTimer(){
    clearInterval
    (interval);
}

function resetTimer(){
    pauseTimer();
    min = 0;
    sec = 0;
    milisec = 0;
    displayMiliSec .innerHTML = Milisec

    displaySec .innerHTML = Sec
    
    displayMin .innerHTML = Min
}