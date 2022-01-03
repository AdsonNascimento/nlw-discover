import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os bontões da class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //registrar o evento de click
  button.addEventListener("click", handleClick)
})

//pegar todos os bontões da class delete
const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
  //registrar o evento de click
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
  //conteudo da modal
  modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta"
  modalDescription.innerHTML = check ? "Tem certeza que você deseja marcar como lida?" : "Tem certeza que você deseja excluir esta pergunta?"
  modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"

  //abrir modal
  modal.open()
}