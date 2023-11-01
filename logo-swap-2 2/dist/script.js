const logo = document.getElementById('logo');
const logoVariations = ['https://picsum.photos/500/300/?image=11', 'https://picsum.photos/500/300/?image=12', 'https://picsum.photos/500/300/?image=13', 'https://picsum.photos/500/300/?image=14', 'https://picsum.photos/500/300/?image=15', 'https://picsum.photos/500/300/?image=16', 'https://picsum.photos/500/300/?image=18', 'https://picsum.photos/500/300/?image=19'];
let currentIndex = 0;

logo.addEventListener('mouseover', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * logoVariations.length);
    } while (randomIndex === currentIndex); // Ensure no repeats

    currentIndex = randomIndex;
    logo.src = logoVariations[currentIndex];
});