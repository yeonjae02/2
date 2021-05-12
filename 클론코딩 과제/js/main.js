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

// 인기검색어 버튼 클릭 시 발생하는 효과
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
// 최근검색어 버튼 클릭 시 발생하는 효과
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

// 푸터 내 공지사항 관련 JS
const backnoticebtn = document.getElementById('morenotice1') 
const nextnoticebtn = document.getElementById('morenotice2')
const notice1 = document.getElementById('firstnoticecontents1')
const notice2 = document.getElementById('firstnoticecontents2')
const notice3 = document.getElementById('firstnoticecontents3')
const back = document.getElementById('material-icons_f1')
const next = document.getElementById('material-icons_f2')
 
backnoticebtn.addEventListener("click", function() {
    if (notice3.style.display === 'block') {
        notice3.style.display = 'none'
        notice2.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    } else if (notice2.style.display === 'block') {
        notice2.style.display = 'none'
        notice1.style.display = 'block'
        back.style.color = '#8b8b8b'
        next.style.color = 'black'
    } else {
        notice1.style.display = 'block'
        back.style.color = '#8b8b8b'
        next.style.color = 'black'
    }
})
nextnoticebtn.addEventListener("click", function() {
    if (notice1.style.display === 'block') {
        notice1.style.display = 'none'
        notice2.style.display = 'block'
        next.style.color = 'black'
        back.style.color = '#8b8b8b'
    } else if (notice2.style.display === 'block') {
        notice2.style.display = 'none'
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    } else {
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    }
})