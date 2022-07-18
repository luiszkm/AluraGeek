
export async function Modal() {

  const openModalButton =  document.querySelector('#open-modal')
  const closeModalButton = document.querySelector('#main-header').onclick = closeModal

  const modal = document.querySelector('#modal')

  async function openModal() {
    try {
      await
        document.querySelectorAll('.productSection').forEach(
          section => {
            section.classList.add('hide')
          })
      document.querySelector('.banner').classList.add('hide')
      modal.classList.remove('hide')
    } catch (error) {
      console.log(error);
    }

  }

  async function closeModal() {
    try {
      await modal.classList.add('hide')
      document.querySelectorAll('.productSection').forEach(
        section => {
          section.classList.remove('hide')
        })
      document.querySelector('.banner').classList.remove('hide')
    } catch (error) {
      console.log(error);
    }

  }
  
  return{
    openModal
  }
}