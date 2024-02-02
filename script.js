const hamburger =document.querySelector(".hamburger")
const bar1 =document.querySelector(".bar1")
const bar2=document.querySelector(".bar2")
const bar3 =document.querySelector(".bar3")
const mobaile_nav =document.querySelector(".mobaile_nav")

hamburger.addEventListener("click", function () {
    bar1.classList.toggle("animateBar1")
    bar2.classList.toggle("animateBar2")
    bar3.classList.toggle("animateBar3")
    mobaile_nav.classList.toggle("openDrawer")
})