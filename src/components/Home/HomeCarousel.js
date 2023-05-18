import { Carousel } from "react-bootstrap";
import "./Home.scss";

import caros1 from "../../assets/images/caros1.jpg";
import caros2 from "../../assets/images/caros2.jpg";
import caros3 from "../../assets/images/caros3.jpg";
import caros4 from "../../assets/images/caros4.jpg";
import caros5 from "../../assets/images/caros5.jpg";
import { useEffect } from "react";

const HomeCarousel = () => {
 

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={caros1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={caros2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={caros3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={caros4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={caros5} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;