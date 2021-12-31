import { Modal } from './modal'

const modal = Modal()

//pegar todos os bontões da class check
const checkButtons = document.querySelectorAll(".actions a.delete")

checkButtons.forEach(button => {
  //registrar o evento de click
  button.addEventListener("click", event => {
    //abrir funcion modal
    modal.open()
  })
})

//pegar todos os bontões da class ec
//pegar quando marcar como lido for clicado
