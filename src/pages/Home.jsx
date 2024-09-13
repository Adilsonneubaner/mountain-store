import './Home.css'
import Footer from '../components/Footer'

import { useGet } from '../hooks/useGet'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Link } from 'react-router-dom'

const Home = () => {
  const url = 'https://coconut-mewing-success.glitch.me/products'
  const {data, loading} = useGet(url)

  return (
    <>
      <main>
        <Swiper 
        modules={[Navigation, Pagination]}
        navigation= {true}
        pagination={{clickable: true}}
        slidesPerView={1}
        >
          <SwiperSlide>
            <div className='container-slide'>
              <p className="slide-text">Nessa página você poderá ver os produtos adicionados em destaque. Veja os próximos slides para conhecer todas as funcionalidades do site!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-slide">
              <p className="slide-text">Na página Produtos você poderá navegar entre as categorias de produtos e adicionar ou remover produtos da lista de destaque.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-slide">
              <p className="slide-text">Você pode cadastrar um novo produto na página Adicionar produtos basta preencher todos os dados sobre o produto.</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container-destaque">
          <h1 className="title-destaque">Destaque</h1>
          <div id="conteudo-destaque">
            {data && data.map((data) => (
              data.emphasis && 
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
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home