import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import "./Sidebar.scss"

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Button className="sidebar-toggle" variant="outline-secondary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} className='toggle' />
                    </Button>
                </Container>
            </Navbar>



            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" onClick={handleClose} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="products" className="nav-link"  onClick={handleClose} >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link"  onClick={handleClose} >Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="suppliers" className="nav-link"  onClick={handleClose} >Suppliers</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;

