


export function SearchBar() {

  const button = document.querySelectorAll('.button, .svg')
  const menuSearchBar = document.querySelector('#search')
  const inputSearch = document.querySelector('#search-bar')

  const buttonSearch = document.querySelector('.button-search')
    .onclick = openSearchBar

  const buttonCloseSearchBar = document.querySelector(' .close-search-bar')
    .onclick = closeSearchBar

  function openSearchBar() {
    button.forEach(button => button.classList.add('sr-only'))
    menuSearchBar.classList.remove('sr-only')

    inputSearch.focus()
  }

  function closeSearchBar() {
    button.forEach(button => button.classList.remove('sr-only'))
    menuSearchBar.classList.add('sr-only')
  }


  inputSearch.addEventListener('input', filtered)

  function filtered() {
    console.log(this.value); 
    const products = document.querySelectorAll('.product')
    const sections = document.querySelectorAll('.productSection')

    if (this.value.length > 0) {

      products.forEach(product => {
        let productName = product.querySelector('h4').textContent
        console.log(productName);

        let expression = new RegExp(this.value, "i")

        if (!expression.test(productName)) {
          product.classList.add('sr-only')
        } else {
          product.classList.remove('sr-only')
        }
      })
    } else {
      products.forEach(product => {
        product.classList.remove('sr-only')
      })
    }
  }

  return {
    openSearchBar,
    closeSearchBar,
    filtered,
  }

}