import React from 'react';
import { Container } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';



// import { NavbarText, DropdownItem, DropdownToggle, UncontrolledDropdown, NavLink, NavItem, Nav, Collapse, NavbarToggler, NavbarBrand, Navbar, DropdownMenu } from 'reactstrap';

function App() {
  return (

    <>
      <NavBarFirst />
      {/* Esta clase de contenedor de bootstrap va acá?
          La estructura del html general, dónde va?
      */}
      <Container>
        <h1>Ofertas</h1>

        <ItemListContainer />

      </Container>


    </>

  );
}

export default App;
