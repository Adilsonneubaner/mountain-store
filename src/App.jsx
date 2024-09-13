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
          <Route path='/products' element={<Home/>}/>
          <Route path='/products/all-products' element={<Products/>}/>
          <Route path='/products/add-product' element={<AddProduct/>}/>
          <Route path='/products/more-information/:id' element={<MoreInformations/>}/>
          <Route path='/products/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
