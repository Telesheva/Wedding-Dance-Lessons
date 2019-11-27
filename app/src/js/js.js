$(document).ready(() => {
    $('.sl').slick({
        dots: true,
        arrows: false,
        variableWidth: true
    })
});

const dropdown = document.querySelector('#dropdown');
const hamburger = document.querySelector('#hamburger');
const headlines = document.getElementsByTagName('h2');

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('icon-hamburger')) {
        hamburger.classList.add('icon-close');
        hamburger.classList.remove('icon-hamburger');
        dropdown.style.display = 'block';
    } else {
        hamburger.classList.remove('icon-close');
        hamburger.classList.add('icon-hamburger');
        dropdown.style.display = 'none';
    }
});

/*
if (window.innerWidth < 480 && window.innerWidth > 320) {
    Array.from(headlines).forEach(h2 => {
        h2.classList.add('wow');
        h2.classList.add('zoomIn');
    })
} else {
    Array.from(headlines).forEach(h2 => {
        h2.classList.remove('wow');
        h2.classList.remove('zoomIn');
    })
}
*/


