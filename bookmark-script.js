// code for the click sliders
const simple = document.getElementById('c-1');
const speedy = document.getElementById('c-2');
const easy = document.getElementById('c-3');

const title = document.querySelector('.content-part h1');
const txt = document.querySelector('.content-part p');
const imageFeature = document.querySelector('.img-holder');

// simple styles for the page
simple.style.color = 'var(--clr-very-dark-blue)';
simple.style.borderBottom = '2px solid var(--clr-soft-Red)';
// the end of simple styles

speedy.addEventListener('click', () => {
    title.textContent = 'Intelligent search';
    speedy.style.color = 'var(--clr-very-dark-blue)';
    speedy.style.borderBottom = '2px solid var(--clr-soft-Red)';
    easy.style.color = 'inherit';
    easy.style.borderBottom = 'none';
    simple.style.color = 'inherit';
    simple.style.borderBottom = 'none';
    txt.textContent = 'Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.'
    imageFeature.style.background = ' url(images/illustration-features-tab-2.svg) no-repeat center center/contain'
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
    imageFeature.style.background = ' url(images/illustration-features-tab-3.svg) no-repeat center/contain'
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
    imageFeature.style.background = ' url(images/illustration-features-tab-1.svg) no-repeat center center/contain'
});

// code for the click sliders

// Feauterd Question Answer
const arrowDown = document.querySelectorAll('.question img');
const revealeContent = document.querySelectorAll('.answer');
const reavelArray = Array(revealeContent);

console.log(revealeContent.length);


arrowDown.forEach((ard) => {
    ard.addEventListener('click', () => {
        const visibility = revealeContent.forEach((hell) => {
            const dope = hell.getAttribute("data-visible");
            if (dope === "false") {
                hell.setAttribute("data-visible", true);
                ard.style.transform = 'rotate(180deg)';
            } else if (dope === "true") {
                hell.setAttribute("data-visible", false);
                ard.style.transform = 'rotate(0deg)';
            }
        })
    });
});
// Feauterd Question Answer

const hamburgerMenu = document.querySelector('.menu-nav ');
const navigation = document.querySelector('.navigation');
const mainHeader = document.querySelector('.main-header');
const firstLogo = document.querySelector('.logo-1');
const secondLogo = document.querySelector('.logo-2');

hamburgerMenu.addEventListener('click', () => {
    const visible = navigation.getAttribute("data-visible");
    if (visible === "false") {
        navigation.setAttribute("data-visible", true);
        navigation.style.display = 'flex'
        hamburgerMenu.style.background = 'url(images/icon-close.svg) no-repeat center center';
        mainHeader.style.backgroundColor = '#252b4695';
        firstLogo.style.display='none';
        secondLogo.style.display='block';
    } else if (visible === "true") {
        navigation.setAttribute("data-visible", false);
        navigation.style.display = 'none'
        hamburgerMenu.style.background = ' url(images/icon-hamburger.svg) no-repeat center center';
        mainHeader.style.backgroundColor = 'transparent';
        firstLogo.style.display='block';
        secondLogo.style.display='none';
    }
});