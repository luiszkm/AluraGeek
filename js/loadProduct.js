import { AddProduct } from './addProduct.js'

const sectionOn = document.querySelector('#sectionOne .gallery')

const addProduct = AddProduct()

export function LoadProduct() {

  function createCard(image, name, price) {
    const productCard = document.createElement("div")
    productCard.classList.add('product')
    productCard.innerHTML = `
    <img src="${image}" alt="foto de ${name}">
    <h4>${name}</h4>
    <strong>R$${price}</strong>
    <a href="#">Ver produto</a>
    `
    return productCard
  }

  let loadProducts = JSON.parse(localStorage.getItem('@api_products'))

  async function loadProduct() {
    loadProducts.forEach(product => {
      product = createCard(product.image, product.name, product.price)
      //sectionOn.append(product)
      console.log(product);
    });
  }

  loadProduct()






  return {

  }
}