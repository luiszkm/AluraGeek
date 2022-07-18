import { AddProduct } from './addProduct.js'

import { Modal } from './modal.js'
const modal =Modal()
const sectionOn = document.querySelector('#sectionOne .gallery')
const sectionTwo = document.querySelector('#sectionTwo .gallery')
const sectionTree = document.querySelector('#sectionTree .gallery')

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

  async function loadProduct() {
    try {
      let products

      let loadProducts = await JSON.parse(localStorage.getItem('@api_products'))
        .forEach((product) => {
          products = createCard(product.image, product.name, product.price)
          console.log(product.category);
          if (product.category === 'main') {
            sectionOn.append(products)
          } else if (product.category === 'console') {
            sectionTwo.append(products)
          } else {
            sectionTree.append(products)
          }      
        })
    } catch (error) {
      return
    }

  }
  loadProduct()


  return {

  }
}