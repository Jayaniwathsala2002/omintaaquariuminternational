// Mobile menu toggle
const toggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

toggle.addEventListener('click', () => {
    nav.style.right = nav.style.right === '0px' ? '-100%' : '0px';
});

// Accordion for mobile dropdowns
dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
        if(window.innerWidth <= 992){
            drop.classList.toggle('active');
        }
    });
});
