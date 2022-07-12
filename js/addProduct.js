


export function AddProduct() {

  let productList = JSON.parse(localStorage.getItem('@api_products')) || []

  const buttonAddProduct = document.querySelector('#add-product')

  //buttonAddProduct.addEventListener('click', cardContentAdd)

  async function cardContentAdd(event) {
    event.preventDefault()

    const imageUrl = document.querySelector('#image').value
    const productCategory = document.querySelector('#category').value
    const productName = document.querySelector('#product-name').value
    const productPrice = document.querySelector('#product-price').value

    const objectTest = await {
      image: imageUrl,
      category: productCategory,
      name: productName,
      price: productPrice
    }
    productList.push(objectTest)

    localStorage.setItem('@api_products', JSON.stringify(productList))
  }

  return {
    cardContentAdd,

  }
}