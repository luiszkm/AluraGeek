import { API } from "./API.js";
const api = API()

export function UpdatedProduct() {
  const modal = document.querySelector('.modal-adm')


  function submitFormAtt(event, id) {
    event.preventDefault()
    try {

      const imageUrl = document.querySelector('#image-adm').value
      const productCategory = document.querySelector('#category-adm option').value
      const productName = document.querySelector('#product-name-adm').value
      const productPrice = document.querySelector('#product-price-adm').value
      /*
          
          */
    } catch {
      return
    }

  }


  async function buttons() {
    try {
      let gallery = document.querySelector('.gallery')
      gallery.addEventListener('click', (event) => {

        let attButton = event.target.classList == 'attProduct adm-button'

        if (attButton) {
          console.log(attButton);
          openModalAdm()
          let card = event.target.closest('[data-id]')
          let id = card.dataset.id
          loadDataForm(id)

        }
      })
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
    modal.classList.remove('sr-only')
    document.body.classList.add('modalExpanded')
  }

  async function loadDataForm(id) {
    let loadProduct = await api.getProductById(Number(id))


    try {
      document.querySelector('#image-adm').value = loadProduct.image
      document.querySelector('#category-adm option').value = loadProduct.category
      document.querySelector('#product-name-adm').value = loadProduct.name
      document.querySelector('#product-price-adm').value = loadProduct.price

      const attButton = document.querySelector("#att-product-adm")
        .addEventListener('click', (event) => {
          event.preventDefault()

          const imageUrl = document.querySelector('#image-adm').value = loadProduct.image
          const productCategory = document.querySelector('#category-adm option').value
          const productName = document.querySelector('#product-name-adm').value
          const productPrice = document.querySelector('#product-price-adm').value

          console.log(productName);
          let productAtt = {
            image: imageUrl,
            category: productCategory,
            name: productName,
            price: productPrice
          }
          api.updatedProduct(productAtt, id)
          alert('produto atualizado com sucesso')
        })

    } catch {
      return
    }
  }

}

