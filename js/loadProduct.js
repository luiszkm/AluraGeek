import { AddProduct } from './addProduct.js'
import { API } from './API.js'
import { Modal } from './modal.js'

const api = API()

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
      let loadProducts =await api.getProducts()
      

      loadProducts.forEach((product) => {
          products = createCard(product.image, product.name, product.price)
          if (product.category === 'Geek') {
            sectionOn.append(products)
          } else if (product.category === 'Gamer') {
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
    loadProduct
  }
}