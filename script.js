let hamburgerMenu = document.getElementById("topnav")
function responsive(){
    if (hamburgerMenu.className == "links"){
        hamburgerMenu.className = "responsive";
    } else{
        hamburgerMenu.className = "links";
    }
}