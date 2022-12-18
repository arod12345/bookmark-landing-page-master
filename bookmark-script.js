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



// const faqOne = document.getElementById('q-1');
// const faqTwo = document.getElementById('q-2');
// const faqThree = document.getElementById('q-3');
// const faqFour = document.getElementById('q-4');

// const imgOne = document.getElementById('img-1');
// const imgTwo = document.getElementById('img-2');
// const imgThree = document.getElementById('img-3');
// const imgFour = document.getElementById('img-4');


// imgOne.addEventListener('click', () => {
//     faqOne.style.display = 'block';
//     imgOne.style.transform = 'rotate(180deg)';
// });

// imgTwo.addEventListener('click', () => {
//     faqTwo.style.display = 'block';
//     imgTwo.style.transform = 'rotate(180deg)';
// });

// imgThree.addEventListener('click', () => {
//     faqThree.style.display = 'block';
//     imgThree.style.transform = 'rotate(180deg)';
// });

// imgFour.addEventListener('click', () => {
//     faqFour.style.display = 'block';
//     imgFour.style.transform = 'rotate(180deg)';
// });


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