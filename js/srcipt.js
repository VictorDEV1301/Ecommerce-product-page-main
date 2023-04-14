const menuMobile = document.querySelector('.menu');
const cartPainel = document.querySelector('.cart');
const imagemPrincipal = document.querySelector('#principal')
const imagens = document.querySelectorAll('.alterar img')

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

  for (let imagem = 1; imagem < 6; imagem++){
    if (e.target.id === `img${imagem}`) {
      imagemPrincipal.setAttribute('src', `./assets/image-product-${imagem}.jpg`)
      imagens.forEach(valor => {
        valor.style.opacity = valor.id === e.target.id ? '0.75' : '1';
      })
    }
  }

})