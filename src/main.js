const bodyBackground = document.querySelector('body');
const btnIconMenu = document.querySelector('.header-container__icon-menu');
const btnMenuClose = document.querySelector('.header-container__menu-close');
const navMobile = document.querySelector('.header-container__nav-bar');

btnIconMenu.addEventListener('click', () => {
    console.log('Mostrar Menu Mobile');
    btnIconMenu.classList.add('disable');
    bodyBackground.classList.add('body-background');
    btnMenuClose.classList.remove('disable');
    navMobile.classList.remove('disable');
});

btnMenuClose.addEventListener('click', () => {
    console.log('Cerrar Menu Mobile');
    btnIconMenu.classList.remove('disable');
    bodyBackground.classList.remove('body-background');
    btnMenuClose.classList.add('disable');
    navMobile.classList.add('disable');
});
