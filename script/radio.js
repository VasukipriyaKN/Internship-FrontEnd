function ontheme()
        {
            document.getElementsByClassName("themeOrange")[0].style.display="block"
            document.getElementsByClassName("themeGreen")[0].style.display="block"
            document.getElementsByClassName("themeBlue")[0].style.display="block"
            document.getElementsByClassName("themeDark")[0].style.display="block"
        }
        function offtheme()
        {
            document.getElementsByClassName("themeOrange")[0].style.display="none"
            document.getElementsByClassName("themeGreen")[0].style.display="none"
            document.getElementsByClassName("themeBlue")[0].style.display="none"
            document.getElementsByClassName("themeDark")[0].style.display="none"
        }
        function theme(themeName){
            if(themeName=='orange')
            {
                document.getElementsByTagName("body")[0].style.backgroundColor="#F3B6A3";
                document.getElementsByTagName("p")[0].style.color="#E2592F"
                document.getElementsByClassName("theme")[0].style.backgroundColor="#E2592F"

            }
            else if(themeName=='green')
            {
                document.getElementsByTagName("body")[0].style.backgroundColor="#B6D1C8";
                document.getElementsByTagName("p")[0].style.color="#125462"
                document.getElementsByClassName("theme")[0].style.backgroundColor="#125462"
            }
            else if(themeName=='blue')
            {
                document.getElementsByTagName("body")[0].style.backgroundColor="#C5C5E9";
                document.getElementsByTagName("p")[0].style.color="#31376B"
                document.getElementsByClassName("theme")[0].style.backgroundColor="#31376B"
            }
            else if(themeName=='dark')
            {
                document.getElementsByTagName("body")[0].style.backgroundColor="#1A1A1A";
                document.getElementsByTagName("p")[0].style.color="#C2185B"
                document.getElementsByClassName("theme")[0].style.backgroundColor="#747474"
            }
            document.getElementsByTagName("h1").style.borderWidth="3"
        }

        var num = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
        console.log(num)
        var target="./audio/"+num+".mp3"
        var aud = new Audio(target);
        function musicButton(info)
        {
            if(info=='play')
            {
                aud.play();
                document.getElementsByTagName("img")[2].style.display="none"
                document.getElementsByTagName("img")[3].style.display="block"
                document.getElementById("rotateCircle").style.animationName="circle"
                document.getElementById("musicBackground").style.filter="saturate(1)"
            }
            else if(info=='pause')
            {
                aud.pause();
                document.getElementsByTagName("img")[2].style.display="block"
                document.getElementsByTagName("img")[3].style.display="none"
                document.getElementById("rotateCircle").style.animationName="circle0"
                document.getElementById("musicBackground").style.filter="saturate(0)"
            }
            else if(info=='back')
            {
                aud.currentTime-=10;
            }
            else if(info=='next')
            {
                aud.currentTime+=10;
            }
            
        }