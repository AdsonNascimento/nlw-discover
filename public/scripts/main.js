import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/*==== pegar todos os bontões da class check ====*/
  const checkButtons = document.querySelectorAll(".actions a.check")

  checkButtons.forEach(button => {
    //registrar o evento de click
    button.addEventListener("click", handleClick)
  })

/*==== pegar todos os bontões da class delete ====*/
  const deleteButtons = document.querySelectorAll(".actions a.delete")

  deleteButtons.forEach(button => {
    //registrar o evento de click
    button.addEventListener("click", (event) => handleClick(event, false))
  })

function handleClick(event, check = true) {
  event.preventDefault()
  //pegar info da sala
  const roomId = document.querySelector("#room-id").dataset.id
  const slug = check ? "check" : "delete"
  const questionId = event.target.dataset.id

  //envio de formulario
  const form = document.querySelector(".modal form")
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

  //conteudo da modal
  const text = check ? "Marcar como lida" : "Excluir"
  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check? modalButton.classList.remove("red") : modalButton.classList.add("red")

  //abrir modal
  modal.open()
}