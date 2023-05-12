import HomeCarousel from "./HomeCarousel";




const Home = () => {
    return (
        <div className="home">
          <div className="banner">
            <h1>Gelateria La Carraia</h1>
          </div>
          <div className="carousel">
        <HomeCarousel/>
      </div>
         
          <div className="map">
            <h2>Dove Siamo</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11524.625882352331!2d11.227610287158216!3d43.769610699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56ab5fc3c57d%3A0xb1b312c28b2057b3!2sGelateria%20La%20Carraia!5e0!3m2!1sit!2sit!4v1683817323788!5m2!1sit!2sit"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      );
    };

export default Home;

