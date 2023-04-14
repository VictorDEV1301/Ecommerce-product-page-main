const menuMobile = document.querySelector('.menu');
const cartPainel = document.querySelector('.cart');

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    menuMobile.style.display = 'flex';
  } else {
    menuMobile.style.display = 'none';
  }
})

document.addEventListener('click', e => {
  if (e.target.id === 'menu-button-mobile') {
    menuMobile.style.display = 'flex';
  }
  if (e.target.id === 'menuClose') {
    menuMobile.style.display = 'none';
  }
  if (e.target.id === 'cart') {
    cartPainel.style.display = cartPainel.style.display === 'none' ? 'flex' : 'none';
  }
})