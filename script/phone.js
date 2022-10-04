var eachNumber = document.getElementsByClassName("eachNumberIcon")
        var numberInput = document.getElementById("numberInput")

        function call(){
            localStorage.setItem("number", numberInput.value);
            numberInput.value = "";
            window.location= "./call.html";
        }
        function numip(e){
            audio = new Audio("./audio/beep-07a.mp3");
            audio.play();
            numberInput.value += e.innerText;
        }