// benefit random banner01
function benefitBanner01(){
    let acBanNum1 =Math.floor(Math.random()*4);
    let acBan1 = document.querySelectorAll('.benefit-banner01 a');
    for(let idx=0;idx<acBan1.length;idx++){
        acBan1[idx].classList.remove('active');
    }
    acBan1[acBanNum1].classList.add('active');           
}

// benefit random banner02
function benefitBanner02(){
    let acIdx =Math.floor(Math.random()*3);
    let acBan = document.querySelectorAll('.benefit-banner02 a');
    for(let idx=0;idx<acBan.length;idx++){
        acBan[idx].classList.remove('active');
    }
    acBan[acIdx].classList.add('active');
}

// mobile login nav form
function mobileForm(bodyOver,tarDis,tarOver,target){
    bodyEl.style.overflow=bodyOver;
    target.style.display=tarDis;
    target.style.overflowY=tarOver;
}