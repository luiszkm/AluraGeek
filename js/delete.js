import { API } from "./API.js"
import { LoadProduct } from "./loadProduct.js"
const api = API()


export function Delete() {
  try {
    let gallery = document.querySelector('.gallery')
    gallery.addEventListener('click', (event) => {
      let deleteButton = event.target.classList == 'deleteProduct adm-button'
      if (deleteButton) {
        let isConfirm = confirm('deseja deletar este produto?')
        if (isConfirm) {
          let card = event.target.closest('[data-id]')
          let id = card.dataset.id
          api.deleteProduct(id)
          const loadProduct = LoadProduct().loadProduct()
        }
      }
    })
  } catch {
    return
  }
}