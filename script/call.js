var num = localStorage.getItem("number")
var nu = document.getElementById("nu");
nu.innerHTML = num;

window.onload = function(){
    audio = new Audio("./audio/ringtone_mobcup.mp3");
    audio.play();
}
function end(){
    audio = new Audio("./audio/hang-up.mp3");
    audio.play();
    setTimeout(() => {
        window.location.href = "./phone.html";
    }, 1000);
}