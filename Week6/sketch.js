"use Strict"
const timeListener = document.getElementById("time");
// Add EventListener to btn
    timeListener.addEventListener("click", function () 
    {
        document.getElementById("demo").innerHTML = Date();
    });

const styleListener = document.getElementById("style");
// Add EventListener to btn
    styleListener.addEventListener("click", function () 
    {
        document.getElementById("demo").style.color="red";
    });

const fontListener = document.getElementById("font");
// Add EventListener to btn
    fontListener.addEventListener("click", function () 
    {
        document.getElementById("demo").style.color="blue";
    });

const color2Listener = document.getElementById("color2");
// Add EventListener to btn
    color2Listener.addEventListener("click", function () 
    {
        document.getElementById("demo").style.color="magenta";
    });

const color3Listener = document.getElementById("color3");
// Add EventListener to btn
    color3Listener.addEventListener("click", function () 
    {
        document.getElementById("demo").style.color="orange";
    });
