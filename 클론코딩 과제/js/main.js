// 다크모드 라이트모드 관련 js
const darkModeBtn = document.getElementById('darkModeBtn')
const lightModeBtn = document.getElementById('lightModeBtn')
const body = document.getElementById('body')

darkModeBtn.addEventListener("click", function(){
    darkModeBtn.style.display = 'none'
    lightModeBtn.style.display = 'block'
    body.style.backgroundColor = 'black'
})

lightModeBtn.addEventListener("click", function(){
    lightModeBtn.style.display = 'none'
    darkModeBtn.style.display = 'block'
    body.style.backgroundColor = 'transparent'
})


// 로그인 회원가입 관련 js 
const menuopenEl = document.getElementById('btn--open')
const menucloseEl = document.getElementById('btn--close')
const menucloseEl2 = document.getElementById('btn--close2')
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

menucloseEl2.addEventListener("click", function() {
    menuopenEl.style.display = 'block'
    menucloseEl.style.display = 'none'
    menuEl.style.display = 'none'
})

// 검색창 클릭 시 나타나는 검색목록들
// const search_contents = document.getElementById('searchAll') 
const searchmenuEl = document.getElementById('searchContents')
const search = document.getElementById('search_box')
const closepopular = document.getElementById('closeSearchWordList') 
const searchmenu = document.getElementById('search-info')     


search.addEventListener("click", function() {
    searchmenuEl.style.display ='block'
})
closepopular.addEventListener("click", function(){
    searchmenuEl.style.display = 'none'
})
// 검색창 내 내부 요소들
const popularbtn = document.getElementById('popular')
const recentbtn = document.getElementById('recent')
const popularcontents = document.getElementById('popularList')
const recentcontents = document.getElementById('recentList')
const remove = document.getElementById('removeAllSearchWord')

popularbtn.addEventListener("click", function(){
    popularcontents.style.display= 'block'
    recentcontents.style.display= 'none'
    searchmenuEl.style.height= "357px"
    closepopular.style.top= '320px'
    popularbtn.style.backgroundColor = '#fff'
    popularbtn.style.borderBottom = '0'
    recentbtn.style.backgroundColor = '#f2f2f2'
    recentbtn.style.borderBottom = '1px solid #d2d2d2'
})
recentbtn.addEventListener("click", function(){
    popularcontents.style.display= 'none'
    recentcontents.style.display= 'block'
    searchmenuEl.style.height= '200px'
    closepopular.style.top= '170px'
    remove.style.top= '170px'
    recentbtn.style.backgroundColor = '#fff'
    recentbtn.style.borderBottom = '0'
    popularbtn.style.backgroundColor = '#f2f2f2'
    popularbtn.style.borderBottom = '1px solid #d2d2d2'
})

// srcoll to top 
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}
// scroll to top 버튼
const srcollToTopBtn = document.querySelector('.btn-scrollToTop')

// 윈도우에 스크롤 이벤트가 발생 시 작동하는 익명의 함수
window.addEventListener("scroll",function(){
    Window.scrollY > 0
    ? srcollToTopBtn.style.display = 'none'
    : srcollToTopBtn.style.display = 'block'
})