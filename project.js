let searchbtn= document.querySelector('#search-btn');
let searchbox= document.querySelector('.search-bar-conatiner');
let formbtn= document.querySelector('#user_btn');
let formbox= document.querySelector('.login-form-container');
let formclose= document.querySelector('#form-close');
let signupform=document.querySelector('.signup-form-container')
let signup=document.querySelector('#signup');
let signclose= document.querySelector('#signup-close');
let passform=document.querySelector('.password-form-container')
let resetpass=document.querySelector('#reset-pass');
let passclose= document.querySelector('#pass-close');
let videobutton= document.querySelectorAll('.video-btn');
let selection= document.querySelectorAll('.selection')
let packagetype= document.querySelectorAll('.packagetype')
let domestic=document.querySelector('#Domestic')
let international=document.querySelector('#international')
let domesticpart= document.querySelector('.box-container2')
let internationalpart=document.querySelector('.box-container')


searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbox.classList.toggle('active');
});

window.onscroll = ()=>{
    searchbtn.classList.remove('fa-times');
    searchbox.classList.remove('active');
};

formbtn.addEventListener('click', () =>{
    formbox.classList.add('activelog');
});

formclose.addEventListener('click', () =>{
    formbox.classList.remove('activelog');
});

signup.addEventListener('click', () =>{
    signupform.classList.add('activesign');
    formbox.classList.remove('activelog');

});

signclose.addEventListener('click', () =>{
    signupform.classList.remove('activesign');
    
});

resetpass.addEventListener('click', () =>{
    passform.classList.add('activepass');
    formbox.classList.remove('activelog');

});

passclose.addEventListener('click', () =>{
    passform.classList.remove('activepass');
});

videobutton.forEach(btn=>{
    btn.addEventListener('click',() =>{
        document.querySelector('.active1').classList.remove('active1');
        btn.classList.add('active1');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-shown').src = src


    });

});

selection.forEach(select=>{
    select.addEventListener('click',()=>{
        document.querySelector('.select').classList.remove('select');
        select.classList.add('select');
    });
    
});

packagetype.forEach(btn2=>{
    btn2.addEventListener('click',() =>{
        document.querySelector('.activepackage').classList.remove('activepackage');
        btn2.classList.add('activepackage');
    });

});

international.addEventListener('click', () =>{
    internationalpart.classList.add('activepart');
    domesticpart.classList.remove('activepart')
});

domestic.addEventListener('click', () =>{
    domesticpart.classList.add('activepart');
    internationalpart.classList.remove('activepart')
});


