import { API } from "./API.js"
const api = API()


export function AddProduct() {

  //let productList = JSON.parse(localStorage.getItem('@api_products')) || []
  const buttonAddProduct = document.querySelector('#add-product')

  async function button (){
    try{
      await buttonAddProduct.addEventListener('click', cardContentAdd)

    }catch(error){
      return
    }
  }
  button ()
  async function cardContentAdd(event) {
    event.preventDefault()


    const imageUrl = document.querySelector('#image').value
    const productCategory = document.querySelector('#category').value
    const productName = document.querySelector('#product-name').value
    const productPrice = document.querySelector('#product-price').value
    

    const newProduct =  {
      image: imageUrl,
      category: productCategory,
      name: productName,
      price: productPrice
    }
    
   // productList.push(newProduct)
    api.addProduct(newProduct)
   // localStorage.setItem('@api_products', JSON.stringify(productList))
  }


  return {
    cardContentAdd,

  }
}