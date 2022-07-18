
export async function Modal() {

  const openModalButton = await document.querySelector('#open-modal')
  const closeModalButton = document.querySelector('#main-header').onclick = closeModal

  const modal = document.querySelector('#modal')

  async function openModal() {

    document.querySelectorAll('.productSection').forEach(
      section => {
        section.classList.add('hide')
      })
    document.querySelector('.banner').classList.add('hide')
    modal.classList.remove('hide')
  }

  function closeModal() {

    modal.classList.add('hide')
    document.querySelectorAll('.productSection').forEach(
      section => {
        section.classList.remove('hide')
      })
    document.querySelector('.banner').classList.remove('hide')
  }

}







