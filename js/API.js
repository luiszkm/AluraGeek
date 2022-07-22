export function API() {
  const api = `http://localhost:3000/profile`;

  async function getProducts(url = api) {
    try {
      let api = await fetch(url)
      let products = await api.json()

      return products

    } catch (error) {
      console.error(error)
    }

  }
  async function getProductById(url = api, id =1 ) {
    try {
      let api = await fetch(`${url}/${id}`)
      let product = await api.json()

      console.log(product);
    } catch (error) {
      return
    }
  }
  async function addProduct(newProduct, url = api) {
    try {
      let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      let products = await then(response => response.json())
    } catch (error) {
      return
    }

  }
  async function updatedProduct(product,id, url = api) {

    try {
      let api = await fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      let products = await api.json()

      return products

    } catch (error) {
      console.error(error)
    }
  }
  async function deleteProduct(id, url = api){
    try {
      let api = await fetch(`${url}/${id}`,{
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      let product = await api.json()

      console.log(product);
    } catch (error) {
      return
    }
  }
  
  getProducts(api) 
  return {
    getProducts,
    getProductById,
    addProduct,
    updatedProduct,
    deleteProduct
  }
}
