import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_PRODUCTS } from '../_Utils/Urls';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
            <div className='home-pr-title'>
            <h3>Our Products</h3>
            </div>
            <Slider slidesToShow={4} swipeToSlide={true} swipeThreshold={50} infinite={true}
                responsive={[{ breakpoint: 500, settings: { slidesToShow: 3, }, },]}>
                {products.map(product => (
                    <div key={product.id} className="card">
                        <img src={base64prefix + product.cover} alt={product.name} className="card-image" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">
                                {product.vegan && <span>Vegan <FontAwesomeIcon className='check' icon={faCheck} /><br /></span>}
                                {product.nutfree && <span>Nut-free <FontAwesomeIcon className='check' icon={faCheck} /><br /></span>}
                                {product.dairyFree && <span>Dairy-free <FontAwesomeIcon className='check' icon={faCheck} /><br /></span>}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeCards;

