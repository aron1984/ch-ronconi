import React from 'react'
import { SiAdidas } from 'react-icons/si'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from './CartWidget'
import './NavBar.css';

export default function NavBar() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='brand'>
                            <SiAdidas size={60} className="logo"/>
                        </Navbar.Brand>
                        <h1 className='myTitle'>SportShop</h1>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">HOMBRE</Nav.Link>
                            <Nav.Link href="#features">MUJER</Nav.Link>
                            <Nav.Link href="#pricing">NIÑOS</Nav.Link>
                        </Nav>
                        <Navbar.Text><CartWidget/></Navbar.Text> 
                    </Container>
                </Navbar>

            </header>
        </div>

    )
}
