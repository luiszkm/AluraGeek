import { AddProduct } from './addProduct.js'



const sectionOn = document.querySelector('#sectionOne .gallery')

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
      let loadProducts = await JSON.parse(localStorage.getItem('@api_products'))
      const load = await loadProducts.forEach(product => {
        product = createCard(product.image, product.name, product.price)
        sectionOn.append(product)
      })
    }catch(error){
      console.log(error);
    }
    
  
  }
  loadProduct()


  return {

  }
}