const menuMobile = document.querySelector('.menu');
const cartPainel = document.querySelector('.cart');
const imagemPrincipal = document.querySelector('#principal');
const MimagemPrincipal = document.querySelector('#Mprincipal');
const imagens = document.querySelectorAll('.alterar img');
const mainTop = document.querySelector('.main-top');

let imagem = 1;

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

  for (let imagem = 1; imagem < 6; imagem++) {
    if (e.target.id === `img${imagem}`) {
      imagemPrincipal.setAttribute('src', `./assets/image-product-${imagem}.jpg`)
      imagens.forEach(valor => {
        valor.style.opacity = valor.id === e.target.id ? '0.75' : '1';
      })
    }
  }

  if(window.innerWidth > 700){

    for (let imagem = 1; imagem < 6; imagem++) {
      if (e.target.id === `Mimg${imagem}`) MimagemPrincipal.setAttribute('src', `./assets/image-product-${imagem}.jpg`)
    }

    if (e.target.id === 'direita') {
      imagem++;
      if (imagem > 4) {
        imagem = 4;
      }
      MimagemPrincipal.setAttribute('src', `./assets/image-product-${imagem}.jpg`)
    }
  
    if (e.target.id === 'esquerda') {
      imagem--;
      if (imagem < 1) {
        imagem = 1;
      }
      MimagemPrincipal.setAttribute('src', `./assets/image-product-${imagem}.jpg`)
    }

    if(e.target.id === 'principal'){
      mainTop.style.display = 'flex';
    }

    if(e.target.id === 'closeImg'){
      mainTop.style.display = 'none';
    }
  }

})
