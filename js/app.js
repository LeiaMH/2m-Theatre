//'What People Say' Section - Scroll Reveal
var slideLeft = {
    mobile: false,
    distance: '20%',
    origin: 'left',
    opacity: 0,
    duration: 900,
    easing: 'ease',
    scale: .75,
};
var slideRight = {
    mobile: false,
    distance: '20%',
    origin: 'right',
    opacity: 0,
    duration: 900,
    easing: 'ease',
    scale: .75,
};

ScrollReveal().reveal('.quote-reveal1',  { ...slideLeft, delay: 300, });
ScrollReveal().reveal('.quote-reveal2',  { ...slideRight, delay: 600, });
ScrollReveal().reveal('.quote-reveal3',  { ...slideLeft, delay: 900, });
ScrollReveal().reveal('.quote-reveal4',  { ...slideRight, delay: 1200, });
ScrollReveal().reveal('.quote-reveal5',  { ...slideLeft, delay: 1500, });
ScrollReveal().reveal('.quote-reveal6',  { ...slideRight, delay: 1800, });
ScrollReveal().reveal('.quote-reveal7',  { ...slideLeft, delay: 2100, });


//Toggle Navbar
const toggle = document.getElementById('toggle-button');

const navMenu = document.getElementById("nav-list-container")
let currentMenuClass = navMenu.classList;

const navButton = document.getElementById("nav-button")
let currentButtonClass = navButton.classList;

toggle.addEventListener('click', () => {
    if (currentMenuClass == 'toggle-off') {
        navMenu.className = 'toggle-on';
     } else if (currentMenuClass == 'toggle-on') {
        navMenu.className = 'toggle-off';
     };

    if (currentButtonClass == 'fas fa-bars') {
       navButton.className = 'fas fa-times';
    } else if (currentButtonClass == 'fas fa-times') {
       navButton.className = 'fas fa-bars';
    }; 
});