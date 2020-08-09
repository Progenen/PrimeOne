  
let menu = document.querySelector('.burger-menu');
let mb = document.querySelector('.menu__body');
let body = document.querySelector('body')
    // Adaptive menu
    menu.addEventListener('click', function(event) {
        menu.classList.toggle('active');
        mb.classList.toggle('active');
        body.classList.add('lock');
    });
    

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();



let lang = document.querySelectorAll('.header-lang__item');
    
for(let i = 0; i < 3; i++) {
    lang[i].addEventListener('click', () =>{
        lang[i].classList.toggle('active_lang');
    });
}

