// 로그인 회원가입창 아이콘 클릭 시 작은 화면이 나올 수 있게 함
const menuopenEl = document.getElementById('btn--open')
const menucloseEl = document.getElementById('btn--close')
const menucloseEl2 = document.getElementById('btn--close2')
const menuEl = document.getElementById('login--list')

// 메뉴열기 버튼을 클릭했을 때 발생하는 일
menuopenEl.addEventListener("click", function() {
    menuopenEl.style.display = 'none'
    menucloseEl.style.display = 'block'
    menuEl.style.display = 'block'
})
// 메뉴닫기1 버튼을 클릭했을 때 발생하는 일
menucloseEl.addEventListener("click", function() {
    menuopenEl.style.display = 'block'
    menucloseEl.style.display = 'none'
    menuEl.style.display = 'none'
})
// 메뉴닫기2 버튼을 클릭했을 때 발생하는 일
menucloseEl2.addEventListener("click", function() {
    menuopenEl.style.display = 'block'
    menucloseEl.style.display = 'none'
    menuEl.style.display = 'none'
})



// 검색창 클릭 시 검색목록이 나타날 수 있도록 함
const btn = document.getElementById('btn')
const headersearch = document.getElementById("header-search")
const searchmenuEl = document.getElementById('searchContents')
const search = document.getElementById('search_box')
const closepopular = document.getElementById('closeSearchWordList') 
const searchmenu = document.getElementById('search-info')     

// 검색창을 클릭했을 때 발생하는 일
search.addEventListener("click", function() {
    searchmenuEl.style.display ='block'
})
// 검색창 닫기 버튼을 클릭했을 때 발생하는 일
closepopular.addEventListener("click", function(){
    searchmenuEl.style.display = 'none'
})
// 검색창 내 내부 요소들을 각각 클릭했을 때 각각의 기능이 구현되게 함
const popularbtn = document.getElementById('popular')
const recentbtn = document.getElementById('recent')
const popularcontents = document.getElementById('popularList')
const recentcontents = document.getElementById('recentList')
const remove = document.getElementById('removeAllSearchWord')

// 인기검색어 버튼 클릭 시 발생하는 일
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
// 특정 부분 제외 클릭 시 사라지도록 하기
popularbtn.addEventListener("blur", function() {
    searchmenuEl.style.display = 'none'
})
recentbtn.addEventListener("blur", function() {
    searchmenuEl.style.display = 'none'
})
btn.addEventListener("blur", function() {
    searchmenuEl.style.display = 'none'
})
// 최근검색어 버튼 클릭 시 발생하는 일
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


// 헤더 아래 종합음악 전시창에서 버튼을 눌렀을 때 변화가 나타나게 함.

// 1,2,3,4,5 숫자
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

// 배너의 슬라이더 구현하기
const $banners = document.querySelectorAll(".banner")
const $dots = document.querySelectorAll(".dot")
const bannerstopbtn = document.getElementById('stopbtn')
const bannerrestartbtn = document.getElementById('releasebtn')
let current = 0;

// 자동슬라이더기능
window.addEventListener("load", function() {
    setInterval(autoSlide1, 3000);   
});
const reset1 = () => {
    $banners.forEach((banner) => {
        banner.style.display = "none";
    });
    $dots.forEach((dot) => {
        dot.style.background = "#FFF";
      });
};
// 해당하는 배너가 등장했을 때
const autoSlide1 = () => {
    reset1();
    if (current === $banners.length-1) {
        current = -1;
    } 
    current++
    $banners[current].style.display = "block"
    $dots[current].style.background = "#737a7f"
};
// 동그라미를 눌러 자유롭게 원하는 배너 보기
$dots.forEach((dot, idx) => {
    dot.addEventListener("click", function() {
        reset1();
        current = idx;
        $banners[current].style.display = 'block'
        $dots[current].style.background = "#737a7f"
    })
})
// 재시작, 멈춤 버튼
bannerstopbtn.addEventListener("click", function() {
    bannerstopbtn.style.display = 'none'
    bannerrestartbtn.style.display = 'block'
})
bannerrestartbtn.addEventListener("click", function() {
    bannerrestartbtn.style.display = 'none'
    bannerstopbtn.style.display = 'block'
})

// hotandnew의 슬라이더 구현하기
const $newcontents = document.querySelectorAll(".newcontents")
const $hotAndNewDot =  document.querySelectorAll(".hotAndNewDot")
const arrowBack = document.getElementById('gobackarrow')
const arrowNext = document.getElementById('gonextarrow')
const bannerstop__btn = document.getElementById('stop--btn')
const bannerrestart__btn = document.getElementById('release--btn')
let newcurrent = 0;
// 자동슬라이더
window.addEventListener("load", function() {
    setInterval(autoSlide2, 3000);
 });
const reset2 = () => {
    $newcontents.forEach((newcontents) => {
        newcontents.style.display = "none";
    });
    $hotAndNewDot.forEach((hotAndNewDot) => {
        hotAndNewDot.style.background = 'white'
        hotAndNewDot.style.opacity = '0.5'
        
    })
};
const autoSlide2 = () => {
    reset2();
    if (newcurrent === $newcontents.length-1) {
        newcurrent = -1;
    } 
    newcurrent++
    $newcontents[newcurrent].style.display = "block"
    $hotAndNewDot[newcurrent].style.backgroundColor = 'white'
    $hotAndNewDot[newcurrent].style.opacity = '1'
};
// 동그라미를 눌러 자유롭게 원하는 배너 보기
$hotAndNewDot.forEach((hotAndNewDot, idx) => {
    hotAndNewDot.addEventListener("click", function() {
        reset2();
        newcurrent = idx;
        $newcontents[newcurrent].style.display = 'block'
        $hotAndNewDot[newcurrent].style.background = "white"
        $hotAndNewDot[newcurrent].style.opacity = "1"
    })
})
// 화살표 클릭 시 다음 광고로 넘어가게 하기
const slidetoNext = () => {
    reset2();
    if (newcurrent === $newcontents.length-1) {
        newcurrent = -1;
    }
    newcurrent++
    $newcontents[newcurrent].style.display = "block"
    $hotAndNewDot[newcurrent].style.backgroundColor = 'white'
    $hotAndNewDot[newcurrent].style.opacity = '1'
}
arrowNext.addEventListener("click", slidetoNext)

// 화살표 클릭 시 이전 광고로 넘어가게 하기
const slidetoBack = () => {
    reset2();
    if (newcurrent === 0) {
        newcurrent = $newcontents.length;
    }
    newcurrent--
    $newcontents[newcurrent].style.display = 'block'
    $hotAndNewDot[newcurrent].style.background = "white"
    $hotAndNewDot[newcurrent].style.opacity = "1"
}
arrowBack.addEventListener("click", slidetoBack)

// 재시작, 멈춤 버튼
bannerstop__btn.addEventListener("click", function() {
    bannerstop__btn.style.display = 'none'
    bannerrestart__btn.style.display = 'block'

})
bannerrestart__btn.addEventListener("click", function() {
    bannerrestart__btn.style.display = 'none'
    bannerstop__btn.style.display = 'block'
})

// 에디터 추천 컨텐츠 더보기 버튼 관련 js 
const er_more = document.getElementById('morecontents')
const er_close = document.getElementById('closecontents')
const line3 = document.getElementById('editorRm3')
const line4 = document.getElementById('editorRm4')

// 더보기 버튼을 클릭했을 때 발생하는 일
er_more.addEventListener("click", function() {
    line3.style.display = 'block'
    line4.style.display = 'block'
    er_more.style.display = 'none'
    er_close.style.display = 'block'
})
// 접기 버튼을 클릭했을 때 발생하는 일
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

// 지니tv에서 추천버튼을 클릭했을 때 발생하는 일
genietvrecomm.addEventListener("click",function() {
    genietvrecomm.style.color = "#0096ff"
    tvmenuHOT.style.color = 'black'
    mnetbrod.style.color = 'black'
    tvRecommContents.style.display = 'block'
    tvHotContents.style.display = 'none'
    tvMnetContents.style.display = 'none'
})
// 지니tv에서 hot 버트을 클릭했을 때 발생하는 일
tvmenuHOT.addEventListener("click", function() {
    tvmenuHOT.style.color = '#0096ff'
    genietvrecomm.style.display = 'black'
    mnetbrod.style.display = 'black'
    tvRecommContents.style.display = 'none'
    tvHotContents.style.display = 'block'
    tvMnetContents.style.display = 'none'
})
// 지니TV에서 MNET방송 버튼을 클릭했을 때 발생하는 일
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
 
// < 버튼을 클릭했을 때 생기는 일
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
// > 버튼을 클릭했을 때 나타나는 변화
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