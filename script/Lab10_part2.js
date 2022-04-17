var topPosition = 200;

var leftPosition = -200;

function runPuppy() {
    var puppy = document.getElementById("puppy");
    puppy.style.top = topPosition + "px";
    puppy.style.left = leftPosition + "px";
    leftPosition += 15;
    if (leftPosition > window.innerWidth) {
        leftPosition = -200;
    }
}			

