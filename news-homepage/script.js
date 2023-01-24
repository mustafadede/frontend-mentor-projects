const wrapperEl = document.querySelector(".wrapper")
const menuEl = document.querySelector(".menu") 
const menuCloseEl = document.querySelector(".menu__close")
const menuWrapperEl = document.querySelector(".menu__wrapper")
const menuCardEl = document.querySelector(".menu__card")
const backdropEl = document.querySelector(".backdrop")
menuEl.addEventListener("click",function () {
    menuWrapperEl.style.display = "block"
})

menuCloseEl.addEventListener("click", function () {
    menuWrapperEl.style.display = "none"
})

backdropEl.addEventListener("click", function () {
    menuWrapperEl.style.display = "none"
})