$(document).ready(() => {
    $('.sl').slick({
        dots: true,
        arrows: false,
        variableWidth: true
    })
});

const dropdown = document.querySelector('#dropdown');
const hamburger = document.querySelector('#hamburger');

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



