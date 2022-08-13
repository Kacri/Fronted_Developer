const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', alternarMenu);

function alternarMenu() {
    desktopMenu.classList.toggle('inactive');
}