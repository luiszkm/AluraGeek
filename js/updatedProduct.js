import { API } from "./API.js";
const api = API()

export function UpdatedProduct() {



  const modal = document.querySelector('.modal-adm')

  async function buttons() {
    try {
      const buttonCloseModalAdm = await document.querySelector('.closeModalAdm')
      buttonCloseModalAdm.onclick = closeModalAdm
    } catch {
      return
    }
  }
  buttons()


  function closeModalAdm() {
    modal.classList.add('sr-only')
    document.body.classList.remove('modalExpanded')
  }

  async function openModalAdm() {
    alert('aaaaa')
    modal.classList.remove('sr-only')
    document.body.classList.add('modalExpanded')
  }


  async function loadDataForm() {
    let loadProduct = await api.getProductById(1)
    try {
      const imageUrl = document.querySelector('#image-adm')
        .value = loadProduct.image
      const productCategory = document.querySelector('#category-adm').value = await loadProduct.category
      const productName = document.querySelector('#product-name-adm').value = await loadProduct.name
      const productPrice = document.querySelector('#product-price-adm').value = await loadProduct.price
    } catch {
      return
    }
  }
  loadDataForm()





}