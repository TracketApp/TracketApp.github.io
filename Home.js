var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor="#111"

var NavBar = document.createElement("script")
NavBar.src="NavBar.js"


var SportsDiv = document.createElement("div")
SportsDiv.style.width="300px"
SportsDiv.style.height="300px"

SportsDiv.style.marginLeft="42%"
SportsDiv.style.marginTop="15%"

SportsDiv.style.borderRadius="30px"

SportsDiv.style.position="absolute"

SportsDiv.style.backgroundColor="#161616"

var SportsTitle = document.createElement("div")
SportsTitle.innerHTML="Sports"

SportsTitle.style.fontSize="25px"
SportsTitle.style.fontWeight="600"
SportsTitle.style.fontFamily="monospace"
SportsTitle.style.color="white"
SportsTitle.style.textAlign = "center"

SportsTitle.style.height="30px"
SportsTitle.style.width="280px"

SportsTitle.style.marginTop="10px"
SportsTitle.style.marginLeft="10px"


var F1Tab = document.createElement("div")
F1Tab.style.width="280px"
F1Tab.style.height="40px"
F1Tab.style.borderRadius="100px"
F1Tab.style.marginTop="10px"
F1Tab.style.marginLeft="10px"
F1Tab.style.backgroundColor="#191919"
F1Tab.onmouseover = function(){F1Tab.style.backgroundColor="#222"}
F1Tab.onmouseleave = function(){F1Tab.style.backgroundColor="#191919"}
F1Tab.onclick = function () {
    location.href = "F1Profile.html";
}
var F1Logo = document.createElement("img")
F1Logo.src="../Imgs/F1Logo.png"
F1Logo.style.marginLeft="15px"
F1Logo.style.marginTop="5px"
F1Logo.style.width="30px"
F1Logo.style.height="30px"

var F1Title = document.createElement("div")
F1Title.innerHTML="Formula 1"
F1Title.style.fontSize="20px"
F1Title.style.fontWeight="500"
F1Title.style.fontFamily="Arial, Helvetica, sans-serif"
F1Title.style.color="white"
F1Title.style.position="absolute"
F1Title.style.textAlign = "center"
F1Title.style.marginLeft="90px"
F1Title.style.marginTop="10px"



F1Tab.appendChild(F1Title)
F1Tab.appendChild(F1Logo)
SportsDiv.appendChild(SportsTitle)
SportsDiv.appendChild(F1Tab)
body.appendChild(SportsDiv)

body.appendChild(NavBar)

