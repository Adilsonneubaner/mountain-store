import './Home.css'
import './Search.css'

import { useSearchParams, Link } from "react-router-dom"

import { useGet } from "../hooks/useGet"

import Footer from "../components/Footer"

import notFound from '../images/nao-encontrado.png'

const Search = () => {
    const [searchParams] = useSearchParams()
    let query = searchParams.get('q')
    query = query.toLowerCase()
    const url = 'https://coconut-mewing-success.glitch.me/products'
    const {data, loading} = useGet(url)
    const filteredData = data?.filter(product => product.stringLower.includes(query))
    console.log(filteredData)
  return (
    <>
      {loading === true ? 
      (
        <main id="main-search">
          <div id='container-loading'>
            <div id='content-loading'></div>
          </div>
        </main>
      ) : (
        <main id="main-search">
          {filteredData == '' ? 
            (<h1 className="search-title">Pesquisa não encontrada</h1>) : 
            (<h1 className="search-title">Resultados disponiveis</h1>
          )}

          {filteredData == '' ? 
          (<div id='container-not-found'>
            <img src={notFound} alt="não encontrado" id='image-not-found'/>
          </div>) :
          (<div id="product-search">
            {filteredData && filteredData.map((data) => (
              <Link to={`/more-information/${data.id}`} key={data.id} className='card-product'>
                <div className="img-product" style={{
                  background: `white url(${data.photo}) center center no-repeat`,
                  backgroundSize: 'contain'
                }}></div>
                <p className="title-product">{data.name}</p>
                <p className='price-product'>R${data.price}</p>
                <p className='informations'>Ver mais informações</p>
              </Link>
            ))}
          </div>)}
        </main>
      )}
      <Footer></Footer>
    </>
  )
}

export default Search