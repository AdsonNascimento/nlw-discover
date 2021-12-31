module.exports = function Modal() {
  function open() {
    //funcão de atibuir a class active para a modal
    document.querySelector('.modal-wrapper').classList.add("active")
  }
  function close() {
    //funcão de remover a class active para a modal
  }

  return{
    open,
    close
  }
}