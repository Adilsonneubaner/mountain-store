import './MoreInformations.css'

import Footer from '../components/Footer'

import { useParams } from "react-router-dom"

import { useGet } from "../hooks/useGet"

const MoreInformations = () => {
    const {id} = useParams()

    const url = `https://coconut-mewing-success.glitch.me/products/${id}`
    const {data} = useGet(url)
    
  return (
    <>
      <main>
          {data && (
              <div id='container-product'>
                <div id="conteudo-product">
                  <div id="container-img">
                  <div className="img-product" style={{
                    background: `white url(${data.photo}) center center no-repeat`,
                    backgroundSize: 'contain'
                  }}></div>
                  </div>
                  <div id="data-product">
                    <p  id='product-title'>{data.name}</p>
                    <div id="product-price">
                      <div id="pix" className='pay'>
                        <div className="pay-method">
                          <i className="bi bi-cash-coin"></i>
                          <p>R$ {data.price}</p>
                        </div>
                        <p className='pix-credit'>No pix com 10% de desconto</p>
                      </div>
                      <div id="credit" className='pay'>
                        <div className="pay-method">
                          <i className="bi bi-credit-card"></i>
                          <p>R$ {data.fees}</p>
                        </div>
                        <p className='pix-credit'>Valor parcelado em até 12x no cartão</p>
                      </div>
                    </div>
                    <div id="buttons">
                      <button className='product-button' id='buy'>Comprar</button>
                      <button className='product-button' id='cart'>Adicionar ao carrinho</button>
                    </div>
                  </div>
                </div>

                <div id="description-product">
                  <p id='title-description'>Descrição do produto</p>
                  <p>{data.description}</p>
                </div>
              </div>
          )}
      </main>
      <Footer></Footer>
    </>
  )
}

export default MoreInformations