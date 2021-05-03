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
    recentbtn.style.backgroundColor = '#f2f2f2'
})
recentbtn.addEventListener("click", function(){
    popularcontents.style.display= 'none'
    recentcontents.style.display= 'block'
    searchmenuEl.style.height= '200px'
    closepopular.style.top= '170px'
    remove.style.top= '170px'
    recentbtn.style.backgroundColor = '#fff'
    popularbtn.style.backgroundColor = 'red'
})
const clickcolor = "#fff"
const notclickcolor = "#F2F2F2"

function popularbtnclick() {
    const currentcolor = popularbtn.style.backgroundColor;
    if (currentcolor == clickcolor) {
        popularbtn.style.backgroundColor = notclickcolor;
    }
    else {
        popularbtn.style.backgroundColor = clickcolor;
    }
}

function popular_init() {
    popularbtn.style.backgroundColor = clickcolor;
    popularbtn.addEventListener("click", popularbtnclick )
}


function recentbtnclick() {
    const currentcolor = recentbtn.style.backgroundColor;
    if (currentcolor == clickcolor) {
        recentbtn.style.backgroundColor = notclickcolor;
    }
    else {
        recentbtn.style.backgroundColor = clickcolor;
    }
}

function recent_init() {
    recentbtn.style.backgroundColor = notclickcolor;
    recnetbtn.addEventListener("click", recentbtnclick )
}

popular_init()
recent_init()


