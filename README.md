# 메가박스 랜딩페이지 반응형 클론코딩  

바로가기 - [megabox](https://jurin2.github.io/megabox)
[![megabox](https://github.com/jurin2/megabox/blob/6620f75de713df2a863b5cd6924fa6d1ec10fad0/readme-images/megabox-readme.jpg)](https://jurin2.github.io/megabox)
<br><br> 

## 설명
<img src="https://img.shields.io/badge/HTML5-d35836?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-3272b0?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JAVASCRIPT-f4df52?style=flat-square&logo=JAVASCRIPT&logoColor=black"/> <img src="https://img.shields.io/badge/JQUERY-0768ac?style=flat-square&logo=JQUERY&logoColor=white"/> <a href="https://github.com/jurin2/megabox/"><img src="https://img.shields.io/badge/GITHUB-171717?style=flat-square&logo=GITHUB&logoColor=white"/>
<br><br>

1. ### 반응형 페이지 작업
#### 웹표준을 준수하여 메가박스 비반응형 페이지를 반응형으로 변경
<img src="/readme-images/megabox-readme.JPG" width="70%" alt="메가박스 랜딩페이지"/> <img src="/readme-images/megabox-mobile.JPG" width="20%" alt="메가박스 반응형 모바일 페이지"/>
<br><br>
  
2. ### 영화리스트 슬라이드
<a href="https://github.com/nolimits4web/swiper?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library"><img src="https://img.shields.io/badge/CDNJS-d96439?style=flat-square&logo=CDNJS&logoColor=white"/></a>
#### - 자바스크립트 라이브러리 swiper를 이용한 영화리스트의 스와이핑<br>- 반응형에 따라 보여지는 영화리스트의 갯수 조절

<img src="/readme-images/movie-list.JPG" width="70%" alt="영화리스트 스와이퍼"/>
<pre>
<code>
// movie-list swiperJs
let swiper = new Swiper(".movie-list .swiper", {
    slidesPerView: 4.5,
    spaceBetween: 20,           
    breakpoints: {
        0: {
            slidesPerView: 1.8, 
            spaceBetween: 40,                  
        },
        768: {
            slidesPerView: 2.9,
            spaceBetween: 36,   
        },
        1024: {
            slidesPerView: 4.1,
            spaceBetween: 30,   
        },
        1200: {
            slidesPerView: 4.5,
        },
    },
});
</code>
</pre>

3. ### Ajax를 이용하여 큐레이션의 상세정보 내용의 빠른 전환
<img src="/readme-images/ajax.JPG" width="70%" alt="메가박스 ajax"/>
<pre>
<code>
function cuLoad(idxNum){
  $('#curation-ajax').load('curation.html #curation0' + idxNum)
}
</code>
</pre>
  
4. ### 새로고침을 할 때마다 혜택부분의 배너의 랜덤한 변경
<img src="/readme-images/megabox-benefit01.JPG" width="45%" alt="메가박스 베네핏1"/> <img src="/readme-images/megabox-benefit02.JPG" width="45%" alt="메가박스 베네핏2"/>
<pre>
<code>
// benefit random banner
function benefitBanner01(){
  let acBanNum1 =Math.floor(Math.random()*4);
  let acBan1 = document.querySelectorAll('.benefit-banner01 a');
  for(let idx=0;idx < acBan1.length;idx++){
      acBan1[idx].classList.remove('active');
  }
  acBan1[acBanNum1].classList.add('active');           
}
</code>
</pre>

5. ### 모달팝업
<a href="https://github.com/carhartl/jquery-cookie?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library"><img src="https://img.shields.io/badge/CDNJS-d96439?style=flat-square&logo=CDNJS&logoColor=white"/></a>
#### - 모달팝업창 체크시 하루동안 보지않기<br>- 제이쿼리 쿠키 플러그인을 이용해 브라우저는 설정된 유효 일자까지 쿠키를 유지하다가, 해당 일자에 도달하면 쿠키를 자동 삭제
<img src="/readme-images/popup.JPG" width="70%" alt="모달팝업창"/>
<pre>
<code>
// modal close event
$('.btn-modal-close').on({
    'click':function(){
        $('.modal-popup').css('display','none');
        if($('.modal-cookie input').is(':checked')){                    
            $.cookie('modal-popup', 'no', { expires: 1 });
        }
    }
})

if($.cookie('modal-popup') == 'no'){
    $('.modal-popup').css('display','none');
}else{
    $('.modal-popup').css('display','block');
}
</code>
</pre>
