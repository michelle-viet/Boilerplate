// ██       ██████   ██████   ██████       ██████ ██   ██  █████  ███    ██  ██████  ███████ 
// ██      ██    ██ ██       ██    ██     ██      ██   ██ ██   ██ ████   ██ ██       ██      
// ██      ██    ██ ██   ███ ██    ██     ██      ███████ ███████ ██ ██  ██ ██   ███ █████   
// ██      ██    ██ ██    ██ ██    ██     ██      ██   ██ ██   ██ ██  ██ ██ ██    ██ ██      
// ███████  ██████   ██████   ██████       ██████ ██   ██ ██   ██ ██   ████  ██████  ███████ (black)
                                                                                          

const images = ['images/logo/logo2-black.svg', 'images/logo/logo3-black.svg', 'images/logo/logo4-black.svg', 'images/logo/logo5-black.svg', 'images/logo/logo7-black.svg', 'images/logo/logo8-black.svg', 'images/logo/logo9-black.svg']; // Add the paths to your images
let currentIndex = 0;

function changeLogo(element) {
    const logo = element.querySelector('#logo');
    currentIndex = (currentIndex + 1) % images.length;
    logo.src = images[currentIndex];
}

function resetLogo(element) {
    const logo = element.querySelector('#logo');
    logo.src = 'images/logo/logo-core-black.svg';
}



// ███    ██  █████  ██    ██     ███    ███ ███████ ███    ██ ██    ██ 
// ████   ██ ██   ██ ██    ██     ████  ████ ██      ████   ██ ██    ██ 
// ██ ██  ██ ███████ ██    ██     ██ ████ ██ █████   ██ ██  ██ ██    ██ 
// ██  ██ ██ ██   ██  ██  ██      ██  ██  ██ ██      ██  ██ ██ ██    ██ 
// ██   ████ ██   ██   ████       ██      ██ ███████ ██   ████  ██████  
                                                                     
function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}