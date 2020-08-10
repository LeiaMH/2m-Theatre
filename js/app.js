var slideLeft = {
    mobile: false,
    distance: '20%',
    origin: 'left',
    opacity: 0,
    duration: 800,
    easing: 'ease',
    scale: .75,
};
var slideRight = {
    mobile: false,
    distance: '20%',
    origin: 'right',
    opacity: 0,
    duration: 800,
    easing: 'ease',
    scale: .75,
};

ScrollReveal().reveal('.quote-reveal1',  { ...slideLeft, delay: 400, });
ScrollReveal().reveal('.quote-reveal2',  { ...slideRight, delay: 800, });
ScrollReveal().reveal('.quote-reveal3',  { ...slideLeft, delay: 1200, });
ScrollReveal().reveal('.quote-reveal4',  { ...slideRight, delay: 1600, });
ScrollReveal().reveal('.quote-reveal5',  { ...slideLeft, delay: 2000, });
ScrollReveal().reveal('.quote-reveal6',  { ...slideRight, delay: 2400, });
ScrollReveal().reveal('.quote-reveal7',  { ...slideLeft, delay: 2800, });