// 로그인 회원가입 관련 js 
const menuopenEl = document.getElementById('btn--open')
const menucloseEl = document.getElementById('btn--close')
const menuEl = document.getElementById('login--list')
const menucloseE2 = document.getElementsById('closebtn')


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

menucloseE2.addEventListener("click", function() {
    menuopenEl.style.display ='none'
    menucloseEl.style.display = 'block'
    menuEl.style.display = 'block'
})