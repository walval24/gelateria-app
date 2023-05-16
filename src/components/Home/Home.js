import HomeCarousel from "./HomeCarousel";
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Figure className="banner-figure">
                <Figure.Image alt="logo" src="https://www.gelaterialacarraia.it/wp-content/uploads/2022/06/gelateria-lacarraia-firenze-logo.jpg" />
            </Figure>
            <div className="carousel">
                <HomeCarousel />
            </div>
            <div className="map-section">
                <h3>Come visit us !</h3>
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11524.625882352331!2d11.227610287158216!3d43.769610699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56ab5fc3c57d%3A0xb1b312c28b2057b3!2sGelateria%20La%20Carraia!5e0!3m2!1sit!2sit!4v1683817323788!5m2!1sit!2sit"
                    ></iframe>
                </div>
            </div>
            <div className="contact-section">
                <h3>Contact us</h3>
                <Form className="customer-form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className=" mb-5" type="submit">Submit form</Button>
                </Form>

            </div>
        </div>
    );
};

export default Home;


