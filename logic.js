var img = document.querySelector(".journeyBoardHeading img")
var JB = document.querySelector(".journeyBoard")
var JBH = document.querySelector(".journeyBoardHeading")
var JBHC = document.querySelector(".JBHC")
var num = document.querySelector(".number")
var list = document.querySelector(".journeyBoard ul");

var open = 0;

img.addEventListener("click", function () {
    if (open) {
        JBH.style.width = "132px";
        JB.style.width = "132px";
        img.style.rotate = "0deg";
        img.style.left = "81px";
        JBHC.style.display = "none";
        num.style.display = "flex";
        list.style.display = "none";
        open=0;
    }
    else {
        JBH.style.width = "392px";
        JB.style.width = "392px";
        img.style.rotate = "180deg";
        img.style.left = "342px";
        JBHC.style.display = "block";
        num.style.display = "none";
        list.style.display = "block";
        open=1;
    }
})