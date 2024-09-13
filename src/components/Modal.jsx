import './Modal.css'
import image from '../images/hand-drawn-no-data-illustration.png'
import { useRef } from 'react'
const Modal = ({isOpen, setIsOpen}) => {
  if(isOpen === true){
    const containerModal = useRef()

    const handleClick = (e) => {
      if(containerModal.current && !containerModal.current.contains(e.target)){
        setIsOpen()
      }
    }
    return (
        <div id='background' onClick={handleClick} >
            <div id='conteudo' ref={containerModal}>
            <i className="bi bi-x" id='close' onClick={setIsOpen}></i>
                <img src={image} alt="Erro" />
                <p>Ops, acho que você esqueceu de preencher alguns campos!</p>
                <button id='button-back' onClick={setIsOpen}>Voltar</button>
            </div>
        </div>
      )
  }
  return null
}

export default Modal