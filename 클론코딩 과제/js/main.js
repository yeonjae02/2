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
const search__word = document.getElementById('search__word')    

// 특정 부분을 제외하고 클릭했을 떄 발생하는 일 jQuery 
$('body').click(function(e) {
    if(!$(e.target).hasClass("searchContentClick") && !$(e.target).hasClass("searchContentsbtn") ) {
        searchmenuEl.style.display = 'none'
    }
})
 
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

// 화살표를 클릭했을 때 보여지는 페이지의 변화 (종합/국내/국외)
const $comprehensive_albums = document.querySelectorAll(".comprehensive_album")
const $domesticMusicAlbums = document.querySelectorAll(".domesticMusicAlbum")
const $foreignMusicAlbums = document.querySelectorAll(".foreignMusicAlbum")
const $albumPages = document.querySelectorAll(".albumPage")
let currentAlbumPage = 0
// 화살표
const entireafteralbum = document.getElementById('preenewalbum')
const entirebeforealbum = document.getElementById('morenewalbum')
//종합 / 국내/ 국외 단어 자체
const synthesis = document.getElementById('synthesis')
const domestic = document.getElementById('domestic')
const foreign = document.getElementById('foreign')

const albumPageNumberChangeForC = () => {
    $comprehensive_albums.forEach((comprehensive_albums) => {
        comprehensive_albums.style.display = "none";
    });
    $albumPages.forEach((albumPages) => {
        albumPages.style.display = "none";
    });
};
// 종합앨범에서 -> 버튼을 클릭했을 때 발생할 함수 정의
const preAlbumShowForC = () => {
    albumPageNumberChangeForC();
    if (currentAlbumPage === 4) {
        currentAlbumPage = -1;
    }
    currentAlbumPage++
    $comprehensive_albums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
// 종합앨범이 보이는 상태에서 <- 버튼을 클릭했을 때 발생할 함수 정의 
const nextAlbumShowForC = () => {
    albumPageNumberChangeForC();
    if (currentAlbumPage === 0) {
        currentAlbumPage = 5;
    }
    currentAlbumPage--
    $comprehensive_albums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
const albumPageNumberChangeForD = () => {
    $domesticMusicAlbums.forEach((domesticMusicAlbums) => {
        domesticMusicAlbums.style.display = "none";
    });
    $albumPages.forEach((albumPages) => {
        albumPages.style.display = "none";
    });
};
// 국내앨범에서 -> 버튼을 클릭했을 때 발생할 함수 정의
const preAlbumShowForD = () => {
    albumPageNumberChangeForD();
    if (currentAlbumPage === 4) {
        currentAlbumPage = -1;
    }
    currentAlbumPage++
    $domesticMusicAlbums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
// 국내앨범이 보이는 상태에서 <- 버튼을 클릭했을 때 발생할 함수 정의 
const nextAlbumShowForD = () => {
    albumPageNumberChangeForD();
    if (currentAlbumPage === 0) {
        currentAlbumPage = 5;
    }
    currentAlbumPage--
    $domesticMusicAlbums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
const albumPageNumberChangeForF = () => {
    $foreignMusicAlbums.forEach((foreignMusicAlbums) => {
        foreignMusicAlbums.style.display = "none";
    });
    $albumPages.forEach((albumPages) => {
        albumPages.style.display = "none";
    });
};
// 국외앨범에서 -> 버튼을 클릭했을 때 발생할 함수 정의
const preAlbumShowForF = () => {
    albumPageNumberChangeForF();
    if (currentAlbumPage === 4) {
        currentAlbumPage = -1;
    }
    currentAlbumPage++
    $foreignMusicAlbums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
// 국외앨범이 보이는 상태에서 <- 버튼을 클릭했을 때 발생할 함수 정의 
const nextAlbumShowForF = () => {
    albumPageNumberChangeForF();
    if (currentAlbumPage === 0) {
        currentAlbumPage = 5;
    }
    currentAlbumPage--
    $foreignMusicAlbums[currentAlbumPage].style.display = "block"
    $albumPages[currentAlbumPage].style.display = "block"

}
entirebeforealbum.addEventListener("click", preAlbumShowForC )
entireafteralbum.addEventListener("click", nextAlbumShowForC )

///종합 버튼을 클릭했을 때 생기는 변화
synthesis.addEventListener("click", function() {
    if (currentAlbumPage !== 0) {
       $albumPages[currentAlbumPage].style.display = "none"
        $albumPages[0].style.display = "block"
    } 
    entireafteralbum.removeEventListener("click", preAlbumShowForD)
    entirebeforealbum.removeEventListener("click", nextAlbumShowForD )
    entirebeforealbum.removeEventListener("click", preAlbumShowForF )
    entireafteralbum.removeEventListener("click", nextAlbumShowForF )
    entirebeforealbum.addEventListener("click", preAlbumShowForC )
    entireafteralbum.addEventListener("click", nextAlbumShowForC )
    synthesis.style.color = '#0096ff'
    domestic.style.color = 'black'
    foreign.style.color = 'black'
    $domesticMusicAlbums[currentAlbumPage].style.display = "none"
    $foreignMusicAlbums[currentAlbumPage].style.display = "none"
    $comprehensive_albums[0].style.display = "block"
    currentAlbumPage = 0
})
// 국내 앨범을 눌렀을 때 생기는 변화
domestic.addEventListener("click",function() {
    if (currentAlbumPage !== 0) {
        $albumPages[currentAlbumPage].style.display = "none"
        $albumPages[0].style.display = "block"
    } 
    entirebeforealbum.removeEventListener("click", preAlbumShowForC )
    entireafteralbum.removeEventListener("click", nextAlbumShowForC )
    entirebeforealbum.removeEventListener("click", preAlbumShowForF )
    entireafteralbum.removeEventListener("click", nextAlbumShowForF )
    entirebeforealbum.addEventListener("click", preAlbumShowForD )
    entireafteralbum.addEventListener("click", nextAlbumShowForD )
    synthesis.style.color = 'black'
    domestic.style.color = '#0096ff'
    foreign.style.color = 'black'
    $comprehensive_albums[currentAlbumPage].style.display = "none"
    $foreignMusicAlbums[currentAlbumPage].style.display = "none"
    $domesticMusicAlbums[0].style.display = "block"
    currentAlbumPage = 0

})

foreign.addEventListener("click", function() {
    if (currentAlbumPage !== 0) {
        $albumPages[currentAlbumPage].style.display = "none"
       $albumPages[0].style.display = "block"
   } 
    entirebeforealbum.removeEventListener("click", preAlbumShowForC )
    entireafteralbum.removeEventListener("click", nextAlbumShowForC )
    entirebeforealbum.removeEventListener("click", preAlbumShowForD)
    entireafteralbum.removeEventListener("click", nextAlbumShowForD )
    entirebeforealbum.addEventListener("click", preAlbumShowForF )
    entireafteralbum.addEventListener("click", nextAlbumShowForF )
    synthesis.style.color = 'black'
    domestic.style.color = 'black'
    foreign.style.color = '#0096ff'
    $comprehensive_albums[currentAlbumPage].style.display = "none"
    $domesticMusicAlbums[currentAlbumPage].style.display = "none"
    $foreignMusicAlbums[0].style.display = "block"
    currentAlbumPage = 0

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
const bannerstopbtn = document.getElementById('stopbtn');
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
// 버튼 눌러 슬라이드 멈춤/재시작 구현하기
bannerstopbtn.addEventListener("click", function() {
    bannerstopbtn.style.display = 'none'
    bannerrestartbtn.style.display = 'block'
})
bannerrestartbtn.addEventListener("click", function() {
    bannerstopbtn.style.display = 'block'
    bannerrestartbtn.style.display = 'none'
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
const back = document.getElementById('material-icons_f1')
const next = document.getElementById('material-icons_f2')
const $footer_first_contents = document.querySelectorAll(".footer-first-contents") 
let currentNoticeNumber = 0

const noticeReset = () => {
    $footer_first_contents.forEach((footer_first_contents) => {
        footer_first_contents.style.display = "none";
        back.style.color = 'black'
        next.style.color = 'black'
    });
};
const clickToNextNotice = () => {
    noticeReset();
    if (currentNoticeNumber === 1) {
        next.style.color = "#8b8b8b"
    }
    currentNoticeNumber++
    $footer_first_contents[currentNoticeNumber].style.display = 'block'
}
nextnoticebtn.addEventListener("click", clickToNextNotice)
// 화살표 클릭 시 이전 광고로 넘어가게 하기
const clickToPreNotice = () => {
    noticeReset();
    if (currentNoticeNumber === 1) {
        back.style.color = "#8b8b8b"
    }
    currentNoticeNumber--
    $footer_first_contents[currentNoticeNumber].style.display = 'block'
}
backnoticebtn.addEventListener("click", clickToPreNotice)