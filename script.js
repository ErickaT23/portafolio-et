const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Agrega este código para cerrar el menú al hacer clic en un enlace del menú
menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});
