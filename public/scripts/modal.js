export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener("click", close)

  function open() {
    //funcão de atibuir a class active para a modal
    modalWrapper.classList.add("active")
  }

  function close() {
    //funcão de remover a class active para a modal
    modalWrapper.classList.remove("active")
  }

  return{
    open,
    close
  }
}