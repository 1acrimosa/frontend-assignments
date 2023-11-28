/*
    I get icons from 'api.adorable.io/avatars'
    But icons doesn't appear at the web page
    Then I just download it (10 images at media file)

    @icons => 'Adorable Avatars'
*/


const media = 'media/';
const container = document.querySelector('.content');

function getRandNum () {
    return Math.floor(Math.random() * 10);
}

function loadImage (numImages = 10) {
    let current = 0;
    while (current < numImages) {
        const img = document.createElement('img');
        img.src = `${media}${getRandNum()}.png`;
        container.appendChild(img);
        current++;
    }
}

loadImage();

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImage();
    }
})

