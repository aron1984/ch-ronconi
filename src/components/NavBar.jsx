import React from 'react'
import { SiAdidas } from 'react-icons/si'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <SiAdidas />
                            {' '} SportShop
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Navbar.Text><CartWidget/></Navbar.Text> 
                    </Container>
                </Navbar>

            </header>
        </div>

    )
}
