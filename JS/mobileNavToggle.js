
let menu = document.getElementById('hamburger');
let x = document.getElementById('hamburger-links');


function toggle(){
    x.classList.toggle('hamburger-links-display')
}

menu.onclick = toggle;
//menu.addEventListener('click', toggle);