import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_PRODUCTS } from '../_Utils/Urls';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';

const HomeCards = () => {
  const [products, setProducts] = useState([]);
  const base64prefix = "data:image/jpeg;base64,"
  useEffect(() => {
    axios.get(URL_PRODUCTS)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="products-section">
    <h3>Our Products</h3>
    <Slider
      slidesToShow={3} // Numero di prodotti da mostrare contemporaneamente
      slidesToScroll={1} // Numero di prodotti da scorrere alla volta
      infinite={true} // Abilita lo scorrimento infinito
      responsive={[
        {
          breakpoint: 768, // Modificare la dimensione del breakpoint se necessario
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={base64prefix + product.cover} alt={product.name} className="card-image" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Is Vegan: {product.vegan ? 'Yes' : 'No'}
              <br />
              Is Nut-free: {product.nutfree ? 'Yes' : 'No'}
              <br />
              Is Dairy-free: {product.dairyFree ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
};

export default HomeCards;