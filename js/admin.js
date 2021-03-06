import { API } from "./API.js"
const api = API()

export function Admin() {


  const sectionAdm = document.querySelector('#section-adm .gallery')

  function createAdminCard(name, price, image, id, inventory) {
    const div = document.createElement('div')
    div.dataset.id = id
    div.classList.add('product', 'adm-product')
    div.innerHTML = `
    <div data-id${id}>
    
      <svg width="24" class="deleteProduct adm-button" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
          fill="white" />
      </svg>
      <svg width="24" class="attProduct adm-button" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z"
          fill="white" />
      </svg>
   
  </div>
          <img src="${image}
          " alt="">
          <h4>${name}</h4>
          <strong>R$${price}</strong>
          <strong>ID:${id}</strong>
          <p>total em estoque estoque:
          <strong>${inventory}</strong>
          </p>
        </div>`

    return div
  }

  async function loadAdminProducts() {
    let productAdm
    let loadProducts = await api.getProducts()

    try {
      //JSON.parse(localStorage.getItem('@api_products'))
      loadProducts.forEach(product => {

        productAdm = createAdminCard(product.name, product.price, product.image, product.id, product.inventory)
        sectionAdm.append(productAdm)
      })
    } catch {
      return
    }
  }

  loadAdminProducts()


}