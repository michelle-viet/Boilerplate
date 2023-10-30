// ██       ██████   ██████   ██████       ██████ ██   ██  █████  ███    ██  ██████  ███████ 
// ██      ██    ██ ██       ██    ██     ██      ██   ██ ██   ██ ████   ██ ██       ██      
// ██      ██    ██ ██   ███ ██    ██     ██      ███████ ███████ ██ ██  ██ ██   ███ █████   
// ██      ██    ██ ██    ██ ██    ██     ██      ██   ██ ██   ██ ██  ██ ██ ██    ██ ██      
// ███████  ██████   ██████   ██████       ██████ ██   ██ ██   ██ ██   ████  ██████  ███████ (black)
                                                                                          

// const images = ['logo-core-black.png', 'logo3-black.png', 'logo4-black.png', 'logo5-black.png', 'logo6-black.png', 'logo7-black.png', 'logo8-black.png', 'logo9-black.png', 'logo10-black.png', 'logo11-black.png', 'logo12-black.png', 'logo13-black.png']; 
// let currentIndex = 0;

// function changeLogo(element) {
//     const logo = element.querySelector('#logo');
//     currentIndex = (currentIndex + 1) % images.length;
//     logo.src = images[currentIndex];
// }

// function resetLogo(element) {
//     const logo = element.querySelector('#logo');
//     logo.src = 'images/logo/logo-core-black.png';
// }


// const logo = document.getElementById('logo');
// const logoVariations = ['https://picsum.photos/500/300/?image=11', 'https://picsum.photos/500/300/?image=12', 'https://picsum.photos/500/300/?image=13', 'https://picsum.photos/500/300/?image=14', 'https://picsum.photos/500/300/?image=15', 'https://picsum.photos/500/300/?image=16', 'https://picsum.photos/500/300/?image=18', 'https://picsum.photos/500/300/?image=19'];
// let currentIndex = 0;

// logo.addEventListener('mouseover', () => {
//     let randomIndex;
//     do {
//         randomIndex = Math.floor(Math.random() * logoVariations.length);
//     } while (randomIndex === currentIndex); // Ensure no repeats

//     currentIndex = randomIndex;
//     logo.src = logoVariations[currentIndex];
// });



// ███    ██  █████  ██    ██     ███    ███ ███████ ███    ██ ██    ██ 
// ████   ██ ██   ██ ██    ██     ████  ████ ██      ████   ██ ██    ██ 
// ██ ██  ██ ███████ ██    ██     ██ ████ ██ █████   ██ ██  ██ ██    ██ 
// ██  ██ ██ ██   ██  ██  ██      ██  ██  ██ ██      ██  ██ ██ ██    ██ 
// ██   ████ ██   ██   ████       ██      ██ ███████ ██   ████  ██████  
                                                                     
function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}