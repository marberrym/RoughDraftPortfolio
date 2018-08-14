var animation = document.querySelector(".animation")

// var lengthArray = ['2em', '4em', '6em', '10em', '12em', '16em', '20em']



var vertLine = function(width, delay) {
    var vline = document.createElement('div');
    vline.classList.add('verticalLine');
    vline.setAttribute('left', width);
    vline.setAttribute('animation', 'alter' + delay + 'ms infinite');
    
    console.log(vline);
    animation.appendChild(vline);
    
}

for (i=0; i<20; i++) {
    var delay = 1000;
    vertLine(i + 'em', delay);
    console.log(i + 'em');
    console.log(delay);
    delay += 1000;
}