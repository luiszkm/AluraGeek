export function API() {
  const api = `http://localhost:3000/products`;

  async function getProducts(url = api) {
    try {
      let api = await fetch(url)
      let products = await api.json()

      console.log(products[0].stock)
      return products
    } catch (error) {
      console.error(error)
    }

  }
  async function getProductById(id ,url = api ) {
    try {
      let api = await fetch(`${url}/${id}`)
      let product = await api.json()

      return product
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
      return products
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
  
  async function attPartProduct(stock, id, url = api){
    try {
      let api = await fetch(`${url}/${id}`,{
        method: "PATCH",
        body: JSON.stringify({"stock":`${stock}`}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      
    } catch{

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
