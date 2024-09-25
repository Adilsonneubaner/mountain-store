import './Products.css'
import './Home.css'

import Footer from '../components/Footer'

import { useGet } from '../hooks/useGet'
import { usePostDelete } from '../hooks/usePostDelete'
import { usePatch } from '../hooks/usePatch'

import { Link } from 'react-router-dom'

import vestuario from '../images/clothing.png'
import ferramentas from '../images/tools.png'
import tecnologia from '../images/technology.png'
import esporte from '../images/sport.png'
import casa from '../images/house.png'

import { useRef} from 'react'

const Products = () => {
  const url = 'https://coconut-mewing-success.glitch.me/products'
  const {data, loading} = useGet(url)
  const {httpConfig} = usePostDelete()
  const {patchConfig} = usePatch()

  const clothing = []
  const tools = []
  const technology = []
  const sport = []
  const house = []

  const inputClothing = useRef()
  const inputTools = useRef()
  const inputTechnology = useRef()
  const inputSport = useRef()
  const inputHouse = useRef()

  const handleClothing = () => {
    inputClothing.current.style.display = 'flex'
    inputTools.current.style.display = 'none'
    inputTechnology.current.style.display = 'none'
    inputSport.current.style.display = 'none'
    inputHouse.current.style.display = 'none'

    inputClothing.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleTools = () => {
    inputTools.current.style.display = 'flex'
    inputClothing.current.style.display = 'none'
    inputTechnology.current.style.display = 'none'
    inputSport.current.style.display = 'none'
    inputHouse.current.style.display = 'none'

    inputTools.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleTechnology = () => {
    inputTechnology.current.style.display = 'flex'
    inputClothing.current.style.display = 'none'
    inputTools.current.style.display = 'none'
    inputSport.current.style.display = 'none'
    inputHouse.current.style.display = 'none'

    inputTechnology.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleSport = () => {
    inputSport.current.style.display = 'flex'
    inputClothing.current.style.display = 'none'
    inputTools.current.style.display = 'none'
    inputTechnology.current.style.display = 'none'
    inputHouse.current.style.display = 'none'

    inputSport.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleHouse = () => {
    inputHouse.current.style.display = 'flex'
    inputClothing.current.style.display = 'none'
    inputTools.current.style.display = 'none'
    inputTechnology.current.style.display = 'none'
    inputSport.current.style.display = 'none'

    inputHouse.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
 
  
  data && data.map((product) => {
    switch (product.category) {
      case 'clothing':
        clothing.push(product)
        break
    
      case 'tools':
        tools.push(product)
        break

      case 'technology':
        technology.push(product)
        break

      case 'sport':
        sport.push(product)
        break

      case 'house':
        house.push(product)
        break
    }
  })
  
  const handleEmphasis = (newEmphasis, id) => {
    const dataPatch = {
      emphasis: !newEmphasis
    }
    patchConfig(dataPatch, id, 'PATCH')
  }
  
  const handleDelete = (id) => {
   httpConfig(id, 'DELETE')
  }

  return (
    <>
      <main>
        <h1 id='title'>Navegue pelas categorias</h1>
        <div id="container-category">

          <div className="category">
            <input type="radio" name="select-category" className='select-category' id='select-clothing' onClick={handleClothing}/>
            <img src={vestuario} alt="imagem vestuário" className='img-category'/>
            <p className="title-category">Vestuário</p>
          </div>

          <div className="category">
            <input type="radio" name="select-category" className='select-category' id='select-tools' onClick={handleTools}/>
            <img src={ferramentas} alt="imagem ferramentas" className='img-category'/>
            <p className="title-category">Ferramentas</p>
          </div>

          <div className="category">
            <input type="radio" name="select-category" className='select-category' id='select-technology' onClick={handleTechnology}/>
            <img src={tecnologia} alt="imagem tecnologia" className='img-category'/>
            <p className="title-category">Tecnologia</p>
          </div>

          <div className="category">
            <input type="radio" name="select-category" className='select-category' id='select-sport' onClick={handleSport}/>
            <img src={esporte} alt="imagem esporte" className='img-category'/>
            <p className="title-category">Esporte</p>
          </div>

          <div className="category">
            <input type="radio" name="select-category" className='select-category' id='select-house' onClick={handleHouse}/>
            <img src={casa} alt="imagem casa e móveis" className='img-category'/>
            <p className="title-category">Casa e Móveis</p>
          </div>

        </div>

        <div id="categorys">

          <div id='clothing' className="content-category" ref={inputClothing}>
            {clothing && clothing.map((products) => (
              <Link to={`/more-information/${products.id}`} key={products.id} className='card-product'>
                <div className="icons" onClick={(e) => e.preventDefault()}>
                  {!products.emphasis &&
                    <i className="bi bi-star" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                  }
                  {products.emphasis &&
                    <i className="bi bi-star-fill" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                  }
                  <i className="bi bi-trash3-fill" onClick={() => handleDelete(products.id)}></i>
                </div>
                <div className="img-product" style={{
                  background: `white url(${products.photo}) center center no-repeat`,
                  backgroundSize: 'contain'
                }}></div>
                <p className="title-product">{products.name}</p>
                <p className='price-product'>R${products.price}</p>
              </Link>
            ))}
          </div>

          <div id="tools" className="content-category" ref={inputTools}>
            {tools && tools.map((products) => (
                <Link to={`/more-information/${products.id}`} key={products.id} className='card-product'>
                  <div className="icons" onClick={(e) => e.preventDefault()}>
                    {!products.emphasis &&
                     <i className="bi bi-star" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    {products.emphasis &&
                     <i className="bi bi-star-fill" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    <i className="bi bi-trash3-fill" onClick={() => handleDelete(products.id)}></i>
                  </div>
                  <div className="img-product" style={{
                    background: `white url(${products.photo}) center center no-repeat`,
                    backgroundSize: 'contain'
                    }}></div>
                  <p className="title-product">{products.name}</p>
                  <p className='price-product'>R${products.price}</p>
              </Link>
              ))}
          </div>

          <div id="technology" className="content-category" ref={inputTechnology}>
            {technology && technology.map((products) => (
                <Link to={`/more-information/${products.id}`} key={products.id} className='card-product'>
                  <div className="icons" onClick={(e) => e.preventDefault()}>
                    {!products.emphasis &&
                     <i className="bi bi-star" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    {products.emphasis &&
                     <i className="bi bi-star-fill" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    <i className="bi bi-trash3-fill" onClick={() => handleDelete(products.id)}></i>
                  </div>
                  <div className="img-product" style={{
                    background: `white url(${products.photo}) center center no-repeat`,
                    backgroundSize: 'contain'
                    }}></div>
                  <p className="title-product">{products.name}</p>
                  <p className='price-product'>R${products.price}</p>
              </Link>
              ))}
          </div>

          <div id="sport" className="content-category" ref={inputSport}>
            {sport && sport.map((products) => (
                <Link to={`/more-information/${products.id}`} key={products.id} className='card-product'>
                  <div className="icons" onClick={(e) => e.preventDefault()}>
                    {!products.emphasis &&
                     <i className="bi bi-star" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    {products.emphasis &&
                     <i className="bi bi-star-fill" onClick={() => handleEmphasis(products.emphasis, products.id)} ></i>
                    }
                    <i className="bi bi-trash3-fill" onClick={() => handleDelete(products.id)}></i>
                  </div>
                  <div className="img-product" style={{
                    background: `white url(${products.photo}) center center no-repeat`,
                    backgroundSize: 'contain'
                    }}></div>
                  <p className="title-product">{products.name}</p>
                  <p className='price-product'>R${products.price}</p>
              </Link>
              ))}
          </div>

          <div id="house" className="content-category" ref={inputHouse}>
            {house && house.map((products) => (
                <Link to={`/more-information/${products.id}`} key={products.id} className='card-product'>
                  <div className="icons" onClick={(e) => e.preventDefault()}>
                    {!products.emphasis &&
                     <i className="bi bi-star" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    {products.emphasis &&
                     <i className="bi bi-star-fill" onClick={() => handleEmphasis(products.emphasis, products.id)}></i>
                    }
                    <i className="bi bi-trash3-fill" onClick={() => handleDelete(products.id)}></i>
                  </div>
                  <div className="img-product" style={{
                    background: `white url(${products.photo}) center center no-repeat`,
                    backgroundSize: 'contain'
                    }}></div>
                  <p className="title-product">{products.name}</p>
                  <p className='price-product'>R${products.price}</p>
              </Link>
              ))}
          </div>
          
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Products