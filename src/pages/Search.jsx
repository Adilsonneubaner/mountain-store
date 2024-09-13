import { useSearchParams, Link } from "react-router-dom"
import { useGet } from "../hooks/useGet"
import './Home.css'
import './Search.css'
import Footer from "../components/Footer"

const Search = () => {
    const [searchParams] = useSearchParams()
    let query = searchParams.get('q')
    query = query.toLowerCase()
    const url = 'https://json-server-api-projeto-products.vercel.app/products'
    const {data} = useGet(url)
    const filteredData = data?.filter(product => product.stringLower.includes(query))
  return (
    <>
      <main id="main-search">
        <h1 id="search-title">Resultados disponiveis</h1>
        <div id="product-search">
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
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Search