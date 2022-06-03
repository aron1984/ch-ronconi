import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';



export default function NavBar() {

    return (
        <div>
            <header>


                <Navbar bg="dark" expand='lg' variant="dark">
                    <Container >
                        <Navbar.Brand className='brand'>
                            <Link className='linkNav' to={`/`}>
                                {/* <SiAdidas size={60} className="logo"></SiAdidas> */}
                                <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Argentina_flag_icon.svg' className="logo" alt='Bandera Argentina' />
                            </Link>
                        </Navbar.Brand>
                        <h1 className='myTitle'>ARG Store</h1>
                        <Navbar.Toggle aria-controls="navbarScroll" />


                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >

                                {/* <Nav className="me-auto"> */}
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
                        </Navbar.Collapse>
                        {/* <Nav><CartWidget /></Nav> */}




                    </Container>


                </Navbar>

            </header>
        </div >

    )
}
