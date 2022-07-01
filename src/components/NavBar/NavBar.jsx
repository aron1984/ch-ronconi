import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { NavBarItems } from './NavBarItems';

export default function NavBar() {

    return (
        <div>
            <header>

                <Navbar bg="dark" expand='lg' variant="dark">
                    <Container >
                        <Navbar.Brand className='brand'>
                            <Link className='linkNav' to={'/'}>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Argentina_flag_icon.svg' className="logo" alt='Bandera Argentina' />
                            </Link>
                        </Navbar.Brand>
                        <h1 className='myTitle'>ARG Store</h1>
                        <Navbar.Toggle aria-controls="navbarScroll" />

                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll >

                                {
                                    <NavBarItems />
                                }

                            </Nav>
                        </Navbar.Collapse>
                        {/* <Nav><CartWidget /></Nav> */}
                    </Container>
                </Navbar>

            </header>
        </div >

    )
}
