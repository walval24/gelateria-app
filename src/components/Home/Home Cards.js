import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_PRODUCTS } from '../_Utils/Urls';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';

const HomeCards = () => {
  const [products, setProducts] = useState([]);
  const base64prefix = 'data:image/jpeg;base64,';
  useEffect(() => {
    axios
      .get(URL_PRODUCTS)
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
        slidesToShow={4}
        swipeToSlide={true}
        swipeThreshold={50}
        infinite={true}
        responsive={[
          {
            breakpoint: 351,
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
              <h5 className={`card-title ${window.innerWidth < 500 ? 'small' : ''}`}>{product.name}</h5>
              <p className={`card-text ${window.innerWidth < 500 ? 'small' : ''}`}>
                Vegan: {product.vegan ? 'Yes' : 'No'}
                <br />
                Nut-free: {product.nutfree ? 'Yes' : 'No'}
                <br />
                Dairy-free: {product.dairyFree ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCards;
