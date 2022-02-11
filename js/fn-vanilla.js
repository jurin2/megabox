// benefit random banner01
function benefitBanner01(){
    let acBanNum1 = Math.floor(Math.random()*4);
    let acBan1 = document.querySelectorAll('.benefit-banner01 a');
    for(let idx=0; idx<acBan1.length; idx++){
        acBan1[idx].classList.remove('active');
    }
    acBan1[acBanNum1].classList.add('active');
}


// benefit random banner02
function benefitBanner02(){
    let acIdx = Math.floor(Math.random()*3);
    let acBan = document.querySelectorAll('.benefit-banner02 a');
    for(let idx=0; idx<acBan.length; idx++){
        acBan[idx].classList.remove('active');
    }
    acBan2[acIdx].classList.add('active');
}

// mobile login nav form
function mobileForm(bodyOver,tarDis,tarOver,target){
    document.querySelector('body').style.overflow=bodyOver;
    target.style.display=tarDis;
    target.style.overflowY=tarOver;
}

// mobile login nav event
function moNavLogin(){
     // 로그인폼 열기
     btnOpLog.addEventListener('click',function(){
        let loginCfm = confirm('로그인 후 사용가능합니다.\n로그인 하시겠습니까?');
        if(loginCfm){
            mobileForm('hidden','block','scroll',loginEl);
        };
    });

    // 로그인폼 닫기
    btnClLog.addEventListener('click',function(){
        mobileForm('scroll','none','hidden',loginEl);
    });

    // 네비게이션 열기
    btnOpNav.addEventListener('click',function(){
        mobileForm('hidden','block','scroll',navEl);
    });

    // 네비게이션 닫기
    btnClNav.addEventListener('click',function(){
        mobileForm('scroll','none','hidden',navEl);
    });
}