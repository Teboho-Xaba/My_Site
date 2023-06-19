const header = document.querySelector("header")
let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".navlist")

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100)
})

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navList.classList.remove('open')
}