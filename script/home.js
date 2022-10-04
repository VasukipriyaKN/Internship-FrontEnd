var time = new Date()
var timenow = time.getHours()+":"+time.getMinutes()
var timeele = document.getElementById("currenttime")
timeele.innerText = timenow

function gmaps(){
    window.open("https://www.google.com/maps")   
}
function phone(){
    window.open("./phone.html")
}
function bluetooth(){
    window.open("./bluetooth.html")
}
function radio(){
    window.open("./radio.html")
}