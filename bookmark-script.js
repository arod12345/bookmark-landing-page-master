const simple = document.getElementById('c-1');
const speedy = document.getElementById('c-2');
const easy = document.getElementById('c-3');

const title = document.querySelector('.content-part h1');
const txt = document.querySelector('.content-part p');
const imageFeature = document.querySelector('.img-holder');

simple.style.color = 'var(--clr-very-dark-blue)';
simple.style.borderBottom = '2px solid var(--clr-soft-Red)';

speedy.addEventListener('click', () => {
    title.textContent = 'Intelligent search';
    speedy.style.color = 'var(--clr-very-dark-blue)';
    speedy.style.borderBottom = '2px solid var(--clr-soft-Red)';
    easy.style.color = 'inherit';
    easy.style.borderBottom = 'none';
    simple.style.color = 'inherit';
    simple.style.borderBottom = 'none';
    txt.textContent = 'Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.'
    imageFeature.style.background = ' url(images/illustration-features-tab-2.svg) no-repeat center center'
});

easy.addEventListener('click', () => {
    title.textContent = 'Share your bookmarks';
    speedy.style.color = 'inherit';
    speedy.style.borderBottom = 'none';
    easy.style.color = 'var(--clr-very-dark-blue)';
    easy.style.borderBottom = '2px solid var(--clr-soft-Red)';
    simple.style.color = 'inherit';
    simple.style.borderBottom = 'none';
    txt.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    imageFeature.style.background = ' url(images/illustration-features-tab-3.svg) no-repeat center'
});

simple.addEventListener('click', () => {
    title.textContent = 'Bookmark in one click';
    speedy.style.color = 'inherit';
    speedy.style.borderBottom = 'none';
    easy.style.color = 'inherit';
    easy.style.borderBottom = 'none';
    simple.style.color = 'var(--clr-very-dark-blue)';
    simple.style.borderBottom = '2px solid var(--clr-soft-Red)';
    txt.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    imageFeature.style.background = ' url(images/illustration-features-tab-1.svg) no-repeat center center'
});

const arrowDown = document.querySelectorAll('.question img');
const revealeaContent = document.querySelectorAll('.answer');

arrowDown.forEach((ard) => {
    ard.addEventListener('click', () => {
        ard.style.transform = 'rotate(180deg)';
        revealeaContent.forEach((rvc) => {
            rvc.style.display = 'block';
        });
    });
});

arrowDown.forEach((ard) => {
    ard.addEventListener('click', () => {
        ard.style.transform = 'rotate(180deg)';
        revealeaContent.forEach((rvc) => {
            rvc.style.display = 'none';
        });
    });
});