
export function Modal() {

  const openModalButton = document.querySelector('#open-modal').onclick = openModal
  const closeModalButton = document.querySelector('#main-header').onclick = closeModal
  
  const modal = document.querySelector('#modal')

  function openModal() {

    document.querySelectorAll('.productSection').forEach(
      section => {
        section.classList.add('hide')
      })
    document.querySelector('.banner').classList.add('hide')
    modal.classList.remove('hide')


  }


  function closeModal (){

    modal.classList.add('hide')
    document.querySelectorAll('.productSection').forEach(
      section => {
        section.classList.remove('hide')
      })
    document.querySelector('.banner').classList.remove('hide')
  }

}







