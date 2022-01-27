let readMore = document.getElementById('read-more');
let button = document.getElementById('read-more-button');



function readMore1 (){
    readMore.classList.toggle('read-more-2');
  
    
}

button.addEventListener('click', readMore1);

let readMore2 = document.getElementById('read-more2');
let button2 = document.getElementById('read-more-button2');

function readMoreAgain (){
    readMore2.classList.toggle('read-more-2');  
}

button2.addEventListener('click', readMoreAgain)

let readMore3 = document.getElementById('read-more3');
let button3 = document.getElementById('read-more-button3');

function readMoreAgainAgain (){
    readMore3.classList.toggle('read-more-2');  
}

button3.addEventListener('click', readMoreAgainAgain)
