import { Carousel } from "react-bootstrap";
import "./Home.scss";




const HomeCarousel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gelaterialacarraia.it/wp-content/uploads/2022/06/gelateria-lacarraia-firenze-tortagelato.jpg"
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gelaterialacarraia.it/wp-content/uploads/2022/06/gelateria-lacarraia-firenze-hours.jpg"
              alt="Second slide"
            />
    
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gelaterialacarraia.it/wp-content/uploads/2022/06/gelateria-lacarraia-firenze-traditional2.jpg"
              alt="Third slide"
            />
    
            
          </Carousel.Item>
        </Carousel>
      );
    }
    

export default HomeCarousel