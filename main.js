var menuButton = document.querySelector('#menuIcon');
var menuBox = document.querySelector('#menuBox');
var mainPic = document.querySelector('.mainPic');
var mainFlex = document.querySelector('.mainPageFlex');
var navBar = document.querySelector('.navBar');

var menuUp = "off";
var showMenu = function(event) {
    if(menuUp === "off") {
        menuBox.classList.add('menuVisible');
        menuUp = "on";
    }
}

var hideMenu = function(event) {
    if(menuUp === "on") {
        if(event.target === mainFlex) {
            menuBox.classList.remove('menuVisible');
            menuUp = "off";
        }
    }
    
}

menuButton.addEventListener('click', showMenu);
window.addEventListener('click', hideMenu);


