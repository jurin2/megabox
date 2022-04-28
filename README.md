# 메가박스 랜딩페이지 클론코딩  

사이트 바로가기 - [megabox](https://jurin2.github.io/megabox)
[![megabox](https://github.com/jurin2/megabox/blob/6620f75de713df2a863b5cd6924fa6d1ec10fad0/readme-images/megabox-readme.jpg)](https://jurin2.github.io/megabox)
<br><br> 

## 주요기능
1. 웹표준을 준수하여 메가박스 비반응형 페이지를 반응형으로 변경  
<img src="/readme-images/megabox-readme.JPG" width="70%" alt="메가박스 랜딩페이지"/> <img src="/readme-images/megabox-mobile.JPG" width="20%" alt="메가박스 반응형 모바일 페이지"/>  
<br>

2. 자바스크립트 라이브러리 swiper를 이용한 영화리스트의 스와이핑
<img src="/readme-images/movie-list.JPG" width="70%" alt="영화리스트 스와이퍼"/>  
<br>

3. Ajax를 이용하여 큐레이션의 상세정보 내용의 빠른 전환  
<img src="/readme-images/ajax.JPG" width="70%" alt="메가박스 ajax"/>  
<pre>
<code>
  function cuLoad(idxNum){
      $('#curation-ajax').load('curation.html #curation0' + idxNum);
  }
</code>
</pre>
<br>

4. 새로고침을 할 때마다 혜택부분의 배너의 랜덤한 변경  
<img src="/readme-images/megabox-benefit01.JPG" width="45%" alt="메가박스 베네핏1"/> <img src="/readme-images/megabox-benefit02.JPG" width="45%" alt="메가박스 베네핏2"/>  
<pre>
<code>
  function benefitBanner01(){
    let acBanNum1 =Math.floor(Math.random()*4);
    let acBan1 = document.querySelectorAll('.benefit-banner01 a');
    for(let idx=0;idx<acBan1.length;idx++){
        acBan1[idx].classList.remove('active');
    }
    acBan1[acBanNum1].classList.add('active');           
  }

  function benefitBanner02(){
    let acIdx =Math.floor(Math.random()*3);
    let acBan = document.querySelectorAll('.benefit-banner02 a');
    for(let idx=0;idx<acBan.length;idx++){
        acBan[idx].classList.remove('active');
    }
    acBan[acIdx].classList.add('active');
  }
</code>
</pre>
<br>

5. 모달팝업창 체크시 하루동안 보지않기
<img src="/readme-images/popup.JPG" width="70%" alt="모달팝업창"/>  
* 브라우저는 설정된 유효 일자까지 쿠키를 유지하다가, 해당 일자가 도달하면 쿠키를 자동으로 삭제한다.  
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
  


  
