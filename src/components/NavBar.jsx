import React from 'react'
import { SiAdidas } from 'react-icons/si'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from './CartWidget'
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className='brand'>
                            <Link className='linkNav' to={`/`}><SiAdidas size={60} className="logo"></SiAdidas></Link>
                        </Navbar.Brand>
                        <h1 className='myTitle'>ARG Store</h1>
                        <Nav className="me-auto">
                            <Nav.Link><Link className='linkNav' to={`/category/futbol`}>Futbol</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/hockey`}>Hockey</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/voley`}>Voley</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/rugby`}>Rugby</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/handball`}>Handball</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/basquet`}>Basquet</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/ciclismo`}>Ciclismo</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/padel`}>Padel</Link></Nav.Link>
                            <Nav.Link><Link className='linkNav' to={`/category/tenis`}>Tenis</Link></Nav.Link>
                        </Nav>

                        <CartWidget />


                    </Container>
                </Navbar>

            </header>
        </div>

    )
}
