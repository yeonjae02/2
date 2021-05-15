// 다크모드 라이트모드 관련 js
// const darkModeBtn = document.getElementById('darkModeBtn')
// const lightModeBtn = document.getElementById('lightModeBtn')
// const body = document.getElementById('body')

// darkModeBtn.addEventListener("click", function(){
//     darkModeBtn.style.display = 'none'
//     lightModeBtn.style.display = 'block'
//     body.style.backgroundColor = 'black'
// })

// lightModeBtn.addEventListener("click", function(){
//     lightModeBtn.style.display = 'none'
//     darkModeBtn.style.display = 'block'
//     body.style.backgroundColor = 'transparent'
// })


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

// 헤더 아래 종합음악 전시창 js
const number1 = document.getElementById('btnresult1')
const number2 = document.getElementById('btnresult2')
const number3 = document.getElementById('btnresult3')
const number4 = document.getElementById('btnresult4')
const number5 = document.getElementById('btnresult5')
const entireafteralbum = document.getElementById('preenewalbum')
const entirebeforealbum = document.getElementById('morenewalbum')
const entirenewAlbum1 = document.getElementById('entireNewAlbum1')
const entirenewAlbum2 = document.getElementById('entireNewAlbum2')
const entirenewAlbum3 = document.getElementById('entireNewAlbum3')
const entirenewAlbum4 = document.getElementById('entireNewAlbum4')
const entirenewAlbum5 = document.getElementById('entireNewAlbum5')

entirebeforealbum.addEventListener("click", function() {
    if (number1.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'block'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    } else if (number2.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'block'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    } else if (number3.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'block'
        entirenewAlbum5.style.display = 'none'
    } else if (number4.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'block'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'block'
    } else {
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'block'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    }
})

entireafteralbum.addEventListener("click", function() {
    if (number1.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = ' block'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'block'
    } else if (number2.style.display ==='block') {
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'block'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    } else if (number3.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'block'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    } else if (number4.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'block'
        entirenewAlbum4.style.display = 'none'
        entirenewAlbum5.style.display = 'none'
    } else {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        entirenewAlbum1.style.display = 'none'
        entirenewAlbum2.style.display = 'none'
        entirenewAlbum3.style.display = 'none'
        entirenewAlbum4.style.display = 'block'
        entirenewAlbum5.style.display = 'none'
    }
}) 
// srcoll to top 
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}
// scroll to top 버튼
const srcollToTopBtn = document.querySelector('.btn-scrollToTop')

// 에디터 추천 컨텐츠 더보기 버튼 관련 js 
const er_more = document.getElementById('morecontents')
const er_close = document.getElementById('closecontents')
const line3 = document.getElementById('editorRm3')
const line4 = document.getElementById('editorRm4')

er_more.addEventListener("click", function() {
    line3.style.display = 'block'
    line4.style.display = 'block'
    er_more.style.display = 'none'
    er_close.style.display = 'block'
})

er_close.addEventListener("click", function() {
    line3.style.display = 'none'
    line4.style.display = 'none'
    er_more.style.display = 'block'
    er_close.style.display = 'none'

})
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
        notice3.style.display = 'none'
        next.style.color = 'black'
        back.style.color = '#8b8b8b'
    } else if (notice2.style.display === 'block') {
        notice1.style.display = 'none'
        notice2.style.display = 'none'
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    } else {
        notice1.style.display = 'none'
        notice2.style.display = 'none'
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    }
})