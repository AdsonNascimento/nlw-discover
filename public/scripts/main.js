import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os bontões da class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //registrar o evento de click
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Marcar como lida"
    modalDescription.innerHTML = "Tem certeza que você deseja marcar como lida?"
    modalButton.innerHTML = "Sim, marcar como lida"
    
    //abrir funcion modal
    modal.open()
  })
})

//pegar todos os bontões da class edelete
const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
  //registrar o evento de click
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Excluir pergunta"
    modalDescription.innerHTML = "Tem certeza que você deseja excluir esta pergunta?"
    modalButton.innerHTML = "Sim, excluir"

    //abrir funcion modal
    modal.open()
  })
})

//pegar quando marcar como lido for clicado
