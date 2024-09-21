import '../components/Navbar.css'
import {useRef, useContext} from 'react'
import './OffCanvas.css'
import { NavLink} from "react-router-dom"
import { DataContext } from "../context/DataContext"

const OffCanvas = ({offCanvas, setOffCanvas, handleNavigate}) => {
    const {search, setSearch} = useContext(DataContext)

    const closeCanvas = useRef()

    const canvas = useRef()
    const handleCloseCanvas = (e) => {
        if(canvas.current && !canvas.current.contains(e.target)){
            setOffCanvas()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       if(search === ''){
        window.alert('Digite um termo para realizar a pesquisa')
       }else{
        handleNavigate(search)
        setOffCanvas()
       }
    }
    
  if(offCanvas === true){
    return (
        <div id='off-canvas' onClick={handleCloseCanvas}>
            <div id="off-canvas-menu" ref={canvas}>
                <div id="container-menu"><i className="bi bi-list menu-canvas" onClick={setOffCanvas} ref={closeCanvas}></i></div>
                <form autoComplete="off" id="search-canva" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Busque por produtos" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </form>
                <NavLink to= '/' className='link-canva' onClick={() => closeCanvas.current.click()}>Página inicial</NavLink>
                <NavLink to= '/products' className='link-canva' onClick={() => closeCanvas.current.click()}>Produtos</NavLink>
                <NavLink to= '/add-product' className='link-canva' onClick={() => closeCanvas.current.click()}>Adicionar produtos</NavLink>
            </div>
        </div>
      )
  }
  return null
}

export default OffCanvas