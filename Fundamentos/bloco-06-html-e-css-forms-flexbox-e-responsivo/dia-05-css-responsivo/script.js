const btnCollapse = document.querySelector('#btn-collapse');
const navMobile = document.querySelector('.menu-collapse');

function showMobileMenu() {
  navMobile.classList.toggle('menu-collapse-none');
}

btnCollapse.addEventListener('click', showMobileMenu);