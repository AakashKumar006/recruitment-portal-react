import React from 'react';
import {Nav, Navbar, Form, Container, NavDropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar className="navbar-nav">
            <Container fluid>
                <Navbar.Brand className="nav">CANDIDATE RECRUITMENT PORAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1"></Nav.Link>
                        <Nav.Link href="#action2"></Nav.Link>
                        <Nav.Link href="#" disabled></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;


