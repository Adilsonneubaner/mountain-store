import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import MoreInformations from './pages/MoreInformations'
import Search from './pages/Search'

// componentes
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path='/more-information/:id' element={<MoreInformations/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
