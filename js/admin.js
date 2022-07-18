


export function Admin() {

  let products = JSON.parse(localStorage.getItem('@api_products'))

  function createAdminCard() {
    const div = document.createElement('div')
    div.classList.add('product','adm-product')
    div.innerHTML = `
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                fill="white" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z"
                fill="white" />
            </svg>
          </div>
          <img src="http://source.unsplash.com/random/-?" alt="">
          <h4>miranha</h4>
          <strong>R$ 9,99</strong>
          <a href="#">Ver Produto</a>
        </div>`

        return div
  }

  async function loadAdminProducts() {

    try {
      console.log(products);
    } catch {
      return
    }
  }

  loadAdminProducts()

}