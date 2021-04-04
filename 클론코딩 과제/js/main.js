const menuopenEl = document.getElementById('btn--open')
const menucloseEl = document.getElementById('btn--close')
const menuEl = document.getElementById('login--list')


menuopenEl.addEventListener("click", function() {
    menuopenEl.style.display = 'none'
    menucloseEl.style.display = 'block'
    menuEl.style.display = 'block'
})

menucloseEl.addEventListener("click", function() {
    menuopenEl.style.display = 'block'
    menucloseEl.style.display = 'none'
    menuEl.style.display = 'none'
})