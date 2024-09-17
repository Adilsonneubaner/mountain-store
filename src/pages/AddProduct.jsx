import './AddProduct.css'
import Footer from "../components/Footer"
import Modal from '../components/Modal'
import { useState, useContext, useRef } from 'react'
import { DataContext } from '../context/DataContext'
import { usePostDelete } from '../hooks/usePostDelete'


const AddProduct = () => {
  const {httpConfig} = usePostDelete()

  const inputsOptions = [
    {value: 'clothing', label: 'Vestuário', id: 1},
    {value: 'tools', label: 'Ferramentas', id: 2},
    {value: 'technology', label: 'Tecnologia', id: 3},
    {value: 'sport', label: 'Esporte', id: 4},
    {value: 'house', label: 'Casa e Móveis', id: 5}
  ]

  const {name, setName, price, setPrice, fees, setFees, category, setCategory, emphasis, setEmphasis, description, setDescription, photo, setPhoto} = useContext(DataContext)

  const [label, setLabel] = useState()

  const [closeOpen, setCloseOpen] = useState()

  const [modal, setModal] = useState(false)

  const [sucess, setSucess] = useState(false)

  const [labelPhoto, setLabelPhoto] = useState('')

  const [sending, setSending] = useState(false)

  const inputsCategory = useRef()


  const handlePrice = (e) => {
    let value = Number(e.target.value)
    let valueFees = value + value * 0.10
    setPrice(value)
    setFees(valueFees)
  }
  
  const handleCategory = (e) => {
    setCategory(e.target.value)
    setLabel(e.target.dataset.label)
    closeOpen.click()
  }

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    setLabelPhoto(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(name === '' || price === '' || category === '' || description === '' || photo === ''){
      setModal(true)
    }else{
      setSending(true)
      let urlPhoto = ''

      const addPhoto = async () => {
        const formData = new FormData()
        formData.append('file', photo)
        formData.append('upload_preset', 'my_images')
        try{
          const res = await fetch('https://api.cloudinary.com/v1_1/dczu9ioht/image/upload',{
            method:'POST',
            body: formData
          })
          const json = await res.json()
          urlPhoto = json.url
        } catch(err){
          console.log(err)
        }
      }
      await addPhoto()

      const data = {
        name,
        stringLower:name.toLowerCase(),
        price: price.toLocaleString('pt-BR',{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }),
        fees: fees.toLocaleString('pt-BR',{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }),
        category,
        emphasis,
        description,
        photo:urlPhoto
      }
      httpConfig(data, "POST")
      setSucess(true)
      setTimeout(() => {
        setSucess(false)
      }, 3000)
      setName('')
      setPrice('')
      setEmphasis(false)
      setLabel('')
      setDescription('')
      setPhoto('')
      setLabelPhoto('')
      setSending(false)
    }
  }
  return (
    <>
      <main id='main-add-product'>
        <form onSubmit={handleSubmit} id="form-addProduct">
          <div className='container-input name-price'>
            <label>Nome do produto
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
          </div><br/>
          <div className='container-input name-price'>
            <label>Preço
              <input type="number" value={price} step='0.01' onChange={handlePrice}/>
            </label>
          </div><br/>
          <div className="container-input select">
            <div id="category-select">
              <label htmlFor="options-view-button">Categoria</label>
              <input type="checkbox" id='options-view-button' onChange={(e) => setCloseOpen(e.target)}/>
              <div id="select-button">
              <div id='select-value'>{label ? (label) : ('Selecione uma categoria')}</div>
                <div id="icons">
                  <i className="bi bi-caret-down-fill"></i>
                  <i className="bi bi-caret-up-fill"></i>
                </div>
              </div>
            </div> 
            <ul id="options" ref={inputsCategory}>
              {inputsOptions.map((inputOpition) => (
                <li className='option' key={inputOpition.id}>
                  <input type="radio" name="category" value={inputOpition.value} data-label={inputOpition.label} onClick={handleCategory}/>
                  <span className='label'>{inputOpition.label} </span>
                  <i className="bi bi-check"></i>
                </li>
              ))}
            </ul>
          </div><br/>
          <div className='container-input'>
            <p>Adicionar aos destaques </p>
            <label id='switch'>
              <input type="checkbox" value={emphasis} onChange={() => setEmphasis(! emphasis)}/>
              <span id="slider"></span>
            </label>
          </div><br/>
          <div className='container-input' id='container-description'>
            <label>Descrição <br/>
              <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </label>
          </div><br/>
          <div className='container-input' id='container-select-photo'>
            <p>Selecionar foto</p>
            <div id='photo'>
              <label>Escolher arquivo
                <input type="file" value={labelPhoto} onChange={handlePhoto}/>
              </label>
              <span>{labelPhoto ? (labelPhoto) : 'Nenhum arquivo selecionado'}</span>
            </div>
          </div><br/>
          <div className='container-input' id='submit'>
            {sucess && <p id='sucess'>Item adiconado com sucesso!</p>}
            {!sending && <input type="submit" value="Adiconar"/>}
            {sending && <input type="submit" disabled value="Enviando" id='sending'/>}
          </div>
        </form>
      </main>
      <Modal isOpen={modal} setIsOpen ={() => setModal(!modal)}></Modal>
      <Footer></Footer>
    </>
  )
}

export default AddProduct