import { NavLink, useNavigate } from "react-router-dom"
import '../components/Navbar.css'
import { useContext, useState } from "react"
import OffCanvas from "./OffCanvas"
import { DataContext } from "../context/DataContext"

import logo from '../images/logo.png'

const Navbar = () => {
    const {search, setSearch} = useContext(DataContext)

    const [offCanvas, setOffCanvas] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleNavigate(search)
    }

    const handleNavigate = (name) => {
        navigate('/search?q=' + name)
    }
  return (
    <header>
        <nav id="navbar">
            <img src={logo} alt="logo" id="logo"/>
            <div id="nav-links">
                <NavLink to= '/' className='link'>Página inicial</NavLink>
                <NavLink to= '/products' className='link'>Produtos</NavLink>
                <NavLink to= '/add-product' className='link'>Adicionar produtos</NavLink>
            </div>
            <form autoComplete="off" id="search" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Busque por produtos" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </form>
            <i className="bi bi-list menu" onClick={() => setOffCanvas(true)}></i>
        </nav>
        <OffCanvas offCanvas = {offCanvas} setOffCanvas = {() => setOffCanvas(!offCanvas)} handleNavigate = {handleNavigate}></OffCanvas>
    </header>
  )
}
 
export default Navbar