var e = new Audio("crash.mp3");
var ride = new Audio("ride.mp3");
button = document.querySelectorAll("button");
for (let a of button) {
    a.addEventListener("click", (e) => {
        let b = e.target.innerText;
        console.log(b);
        if (b == "E") {
            myfun1();
        }
        else if (b == "R") {
            myfun2();
        }

    })
}
function myfun1() {
    e.play();
}
function myfun2() {
    ride.play();
}