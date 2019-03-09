let hamburger = document.getElementById('hamburger'),
    menu = document.querySelector('#menu'),
    options = document.querySelectorAll('.options li a'),
    logo = document.querySelector('.logo');
    menuBool = false;

function menuUp(){
    menuBool = !menuBool;
    if (menuBool) {
        hamburger.className = 'open';
        logo.style.setProperty('top', '-1%');
        menu.style.setProperty('top', '0');
    } else {
        hamburger.className = '';
        logo.style.setProperty('top', '-200vh');
        menu.style.setProperty('top', '-200vh');
    }
}

hamburger.addEventListener('click', menuUp);

for(let i of options){
    i.addEventListener('click', menuUp);
}