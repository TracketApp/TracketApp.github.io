var body = document.getElementsByTagName("body")[0];

var NavBarDiv = document.createElement("div")

NavBarDiv.style.width="50px"
NavBarDiv.style.height="100%"

NavBarDiv.style.borderRadius="100px"

NavBarDiv.style.backgroundColor="#161616"

var HomeBTN = document.createElement("button")
HomeBTN.style.width="35px"
HomeBTN.style.height="35px"

HomeBTN.style.marginLeft="7px"
HomeBTN.style.marginTop="7px"

HomeBTN.style.border="0px"
HomeBTN.style.borderRadius="100px"
HomeBTN.style.backgroundColor="transparent"

HomeBTN.onmouseover = function(){HomeBTN.style.backgroundColor="#222"}
HomeBTN.onmouseleave = function(){HomeBTN.style.backgroundColor="transparent"}
HomeBTN.onclick = function () {
    location.href = "index.html";
}

var HomeICON = document.createElement("img")
HomeICON.src="../Imgs/HomeIcon.png"

HomeICON.style.width="20px"
HomeICON.style.height="20px"

HomeICON.style.marginLeft="-1px"
HomeICON.style.marginTop="-3px"

HomeBTN.appendChild(HomeICON)
body.appendChild(NavBarDiv)
NavBarDiv.appendChild(HomeBTN)


