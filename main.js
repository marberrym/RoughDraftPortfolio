var menuButton = document.querySelector('#menuIcon');
var menuBox = document.querySelector('#menuBox');

var showMenu = function(event) {
    menuBox.classList.add('menuVisible');
}

menuButton.addEventListener('click', showMenu)