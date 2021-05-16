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

const domesticMusicAlbum1 = document.getElementById('domesticMusicAlbum1')
const domesticMusicAlbum2 = document.getElementById('domesticMusicAlbum2')
const domesticMusicAlbum3 = document.getElementById('domesticMusicAlbum3')
const domesticMusicAlbum4 = document.getElementById('domesticMusicAlbum4')
const domesticMusicAlbum5 = document.getElementById('domesticMusicAlbum5')

const foreignMusicAlbum1 = document.getElementById('foreignMusicAlbum1')
const foreignMusicAlbum2 = document.getElementById('foreignMusicAlbum2')
const foreignMusicAlbum3 = document.getElementById('foreignMusicAlbum3')
const foreignMusicAlbum4 = document.getElementById('foreignMusicAlbum4')
const foreignMusicAlbum5 = document.getElementById('foreignMusicAlbum5')

const synthesis = document.getElementById('synthesis')
const domestic = document.getElementById('domestic')
const foreign = document.getElementById('foreign')

const entireNewAlbum =document.getElementById('entireNewAlbum')
const domesticMusicAlbum = document.getElementById('domesticMusicAlbum')
const foreignMusicAlbum = document.getElementById('foreignMusicAlbum')

//종합 버튼을 클릭했을 때 생기는 변화
synthesis.addEventListener("click", function() {
    entireNewAlbum.style.display = 'block'
    entirenewAlbum1.style.display = 'block'
    domesticMusicAlbum.style.display = 'none'
    foreignMusicAlbum.style.display = 'none'
    number1.style.display = 'block'
    number2.style.display = 'none'
    number3.style.display = 'none'
    number4.style.display = 'none'
    number5.style.display = 'none'
    synthesis.style.color = '#0096ff'
    domestic.style.color = 'black'
    foreign.style.color = 'black'
})
// 국내 앨범을 눌렀을 때 생기는 변화
domestic.addEventListener("click",function() {
    entireNewAlbum.style.display = 'none'
    domesticMusicAlbum.style.display = 'block'
    domesticMusicAlbum1.style.display = 'block'
    foreignMusicAlbum.style.display = 'none'
    number1.style.display = 'block'
    number2.style.display = 'none'
    number3.style.display = 'none'
    number4.style.display = 'none'
    number5.style.display = 'none'
    synthesis.style.color = 'black'
    domestic.style.color = '#0096ff'
    foreign.style.color = 'black'
})
// 국외 앨범을 눌렀을 때 생기는 변화
foreign.addEventListener("click", function() {
    entireNewAlbum.style.display = 'none'
    domesticMusicAlbum.style.display = 'none'
    foreignMusicAlbum.style.display = 'block'
    foreignMusicAlbum1.style.display = 'block'
    number1.style.display = 'block'
    number2.style.display = 'none'
    number3.style.display = 'none'
    number4.style.display = 'none'
    number5.style.display = 'none'
    synthesis.style.color = 'black'
    domestic.style.color = 'black'
    foreign.style.color = '#0096ff'
})

// <- 버튼 클릭 시 생기는 변화 (초기상태가 아닌 버튼 클릭 시 기준)
// entireNewAlbum은 종합 버튼 클릭 시, domesticNewAlbum은 국내 버튼 클릭 시, 
entirebeforealbum.addEventListener("click", function() {
    if (number1.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'block'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none'
    } else if (number2.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'block'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number3.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'block'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number4.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'block'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'block' 
    } else if (number5.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'block'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number1.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'block'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    } else if (number2.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'block'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    }else if (number3.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'block'
        foreignMusicAlbum5.style.display = 'none' 
    }else if (number4.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'block'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'block' 
    }else if (number5.style.display === 'block' && foreignMusicAlbum.style.display === 'block') {
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'block'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    } else {
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
        } else{
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
    }
})

entireafteralbum.addEventListener("click", function() {
    if (number1.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'block'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'block'
    } else if (number2.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'block'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number3.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'block'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number4.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'block'
        domesticMusicAlbum4.style.display = 'none'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number5.style.display === 'block' && domesticMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        domesticMusicAlbum1.style.display = 'none'
        domesticMusicAlbum2.style.display = 'none'
        domesticMusicAlbum3.style.display = 'none'
        domesticMusicAlbum4.style.display = 'block'
        domesticMusicAlbum5.style.display = 'none' 
    } else if (number1.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'block'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'block' 
    } else if (number2.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'block'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'block'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    }else if (number3.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'block'
        number3.style.display = 'none'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'block'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    }else if (number4.style.display === 'block' && foreignMusicAlbum.style.display === 'block'){
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'block'
        number4.style.display = 'none'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'block'
        foreignMusicAlbum4.style.display = 'none'
        foreignMusicAlbum5.style.display = 'none' 
    }else if (number5.style.display === 'block' && foreignMusicAlbum.style.display === 'block') {
        number1.style.display = 'none'
        number2.style.display = 'none'
        number3.style.display = 'none'
        number4.style.display = 'block'
        number5.style.display = 'none'
        foreignMusicAlbum1.style.display = 'none'
        foreignMusicAlbum2.style.display = 'none'
        foreignMusicAlbum3.style.display = 'none'
        foreignMusicAlbum4.style.display = 'block'
        foreignMusicAlbum5.style.display = 'none' 
    } else {
        if (number5.style.display === 'block') {
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
        } else if (number2.style.display === 'block') {
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
            number4.style.display = 'none'
            number5.style.display = 'block'
            entirenewAlbum1.style.display = 'none'
            entirenewAlbum2.style.display = 'none'
            entirenewAlbum3.style.display = 'none'
            entirenewAlbum4.style.display = 'none'
            entirenewAlbum5.style.display = 'block'
        }
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

// 지니TV 컨텐츠 관련 JS 
const genietvrecomm = document.getElementById('genietvrecomm')
const tvRecommContents = document.getElementById('tvRecommContents')
const tvmenuHOT = document.getElementById('tvmenuHOT')
const tvHotContents = document.getElementById('tvHotContents')
const mnetbrod = document.getElementById('mnetbrod')
const tvMnetContents = document.getElementById('tvMnetContents')

genietvrecomm.addEventListener("click",function() {
    genietvrecomm.style.color = "#0096ff"
    tvmenuHOT.style.color = 'black'
    mnetbrod.style.color = 'black'
    tvRecommContents.style.display = 'block'
    tvHotContents.style.display = 'none'
    tvMnetContents.style.display = 'none'
})

tvmenuHOT.addEventListener("click", function() {
    tvmenuHOT.style.color = '#0096ff'
    genietvrecomm.style.display = 'black'
    mnetbrod.style.display = 'black'
    tvRecommContents.style.display = 'none'
    tvHotContents.style.display = 'block'
    tvMnetContents.style.display = 'none'

})
mnetbrod.addEventListener("click", function() {
    genietvrecomm.style.color = 'black'
    tvmenuHOT.style.color = 'black'
    mnetbrod.style.color = '#0096ff'
    tvRecommContents.style.display = 'none'
    tvHotContents.style.display = 'none'
    tvMnetContents.style.display = 'block'
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
        notice1.style.display = 'none'
        notice2.style.display = 'block'
        notice3.style.display = 'none'
        next.style.color = 'black'
        back.style.color = 'black'
    } else if (notice2.style.display === 'block') {
        notice1.style.display = 'block'
        notice2.style.display = 'none'
        notice3.style.display = 'none'
        back.style.color = '#8b8b8b'
        next.style.color = 'black'
    } else {
        notice1.style.display = 'block'
        notice2.style.display = 'none'
        notice3.style.display ='none'
        back.style.color = '#8b8b8b'
        next.style.color = 'black'
    }
})
nextnoticebtn.addEventListener("click", function() {
    if (notice2.style.display === 'block') {
        notice1.style.display = 'none'
        notice2.style.display = 'none'
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = '#black'
    }else if (notice3.style.display === 'block') {
        notice1.style.display = 'none'
        notice2.style.display = 'none'
        notice3.style.display = 'block'
        next.style.color = '#8b8b8b'
        back.style.color = 'black'
    } else  {
        notice1.style.display = 'none'
        notice2.style.display = 'block'
        notice3.style.display = 'none'
        next.style.color = 'black'
        back.style.color = 'black'
    } 
})