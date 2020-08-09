$('document').ready(function(){
    
    // Adaptive menu
    $('.burger-menu').click(function(event) {
        $('.burger-menu, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // IBg
    

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

