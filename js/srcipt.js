const menuMobile = document.querySelector('.menu');
const cartPainel = document.querySelector('.cart');
const imagemPrincipal = document.querySelector('#principal');
const MimagemPrincipal = document.querySelector('#Mprincipal');
const imagens = document.querySelectorAll('.alterar img');
const mainTop = document.querySelector('.main-top');
const quantidade = document.querySelector('#quantidade')
const cartModify = document.querySelector('.cart-modify');

let imagem = 1;
let quantidadeItens = 0;

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    menuMobile.style.display = 'flex';
  } else {
    menuMobile.style.display = 'none';
  }
})

document.addEventListener('click', e => {
  if (e.target.id === 'menu-button-mobile') menuMobile.style.display = 'flex';

  if (e.target.id === 'menuClose') menuMobile.style.display = 'none';

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

  if (window.innerWidth > 700) {

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

    if (e.target.id === 'principal') mainTop.style.display = 'flex';

    if (e.target.id === 'closeImg') mainTop.style.display = 'none';
  }

  if (e.target.id === 'minus') {
    quantidadeItens--;
    if (quantidadeItens < 0) quantidadeItens = 0;
    quantidade.innerHTML = quantidadeItens;
  }

  if (e.target.id === 'plus') {
    quantidadeItens++;
    if (quantidadeItens > 10) quantidadeItens = 10;
    quantidade.innerHTML = quantidadeItens;
  }

  if (e.target.id === 'buttonCart') Number(document.querySelector('#quantidade').innerText) === 0 ? void (0) : addToCart();

  if (e.target.id === 'removeCart') resetCart();


})

function addToCart() {
  cartModify.innerHTML = '';
  const div = document.createElement('div');
  const divText = document.createElement('divText');
  divText.setAttribute('class', 'divText');

  const img = document.createElement('img');
  img.setAttribute('src', './assets/image-product-1-thumbnail.jpg');

  const p = document.createElement('p');
  p.innerHTML = document.querySelector('.right h1').innerText;

  const preco = document.createElement('p');
  let number = Number(document.querySelector('.top h2').innerText.replace('$', ''))
  let quantidade = Number(document.querySelector('#quantidade').innerText);
  preco.innerHTML = `$${number}.00 x ${quantidade} <strong>$${number * quantidade}.00</strong>`;

  const button = document.createElement('button');
  button.innerText = 'CheckOut';

  const remove = document.createElement('img');
  remove.setAttribute('src','./assets/icon-delete.svg');
  remove.setAttribute('id','removeCart');

  divText.appendChild(p);
  divText.appendChild(preco);
  divText.appendChild(remove)


  div.appendChild(img);
  div.appendChild(divText);
  div.appendChild(button);

  cartModify.appendChild(div);
}

function resetCart(){
  cartModify.innerHTML = '';
  const p = document.createElement('p');
  p.innerHTML = 'Your cart empty.';
  cartModify.appendChild(p);
}
