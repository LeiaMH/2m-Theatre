var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 1000,
};
var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    delay: 1000,
};

ScrollReveal().reveal('.quote-reveal1',  { ...slideLeft, delay: 1000, });
ScrollReveal().reveal('.quote-reveal2',  { ...slideRight, delay: 1200, });
ScrollReveal().reveal('.quote-reveal3',  { ...slideLeft, delay: 1400, });
ScrollReveal().reveal('.quote-reveal4',  { ...slideRight, delay: 1600, });
ScrollReveal().reveal('.quote-reveal5',  { ...slideLeft, delay: 1800, });
ScrollReveal().reveal('.quote-reveal6',  { ...slideRight, delay: 2000, });
ScrollReveal().reveal('.quote-reveal7',  { ...slideLeft, delay: 2200, });