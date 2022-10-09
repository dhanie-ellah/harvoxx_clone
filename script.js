let hamburgerMenu = document.getElementById("topnav")
function responsive(){
    if (hamburgerMenu.className == "links"){
        hamburgerMenu.className = "responsive";
    } else{
        hamburgerMenu.className = "links";
    }
}

let toTop = document.getElementById('totop')
function scrollToTop(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        toTop.style.display = 'block'
    } else {
        toTop.style.display = 'none'
    }
}

toTop.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

window.onscroll = function(){scrollToTop()}