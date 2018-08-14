import anime from 'animejs';

var menuButton = document.querySelector('#menuIcon');
var menuBox = document.querySelector('#menuBox');
var mainPic = document.querySelector('.mainPic');
var mainFlex = document.querySelector('.mainPageFlex');
var navBar = document.querySelector('.navBar');
var lhLogo = document.querySelectorAll('.lhLogo');

var showMenu = function(event) {
    if(event.target === menuButton) {
        menuBox.classList.add('menuVisible');    
    }
}

var hideMenu = function(event) {
        if(event.target === mainFlex ) {
            menuBox.classList.remove('menuVisible');
            menuUp = "off";
        }  
}

menuButton.addEventListener('click', showMenu);
window.addEventListener('click', hideMenu);

mainPic.addEventListener('click', lhanimation);


