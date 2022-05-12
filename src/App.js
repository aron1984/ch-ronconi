import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBarFirst from './components/NavBar';

// import { NavbarText, DropdownItem, DropdownToggle, UncontrolledDropdown, NavLink, NavItem, Nav, Collapse, NavbarToggler, NavbarBrand, Navbar, DropdownMenu } from 'reactstrap';

function App() {
  return (

    <div>
      <NavBarFirst />

      <div className='containerMain'>
        <section className='main'>
          <p>Esto será una sección</p>
        </section>
        <sidebar className='sidebar'>
          <p>Esto será un sidebar</p>
        </sidebar>
      </div>
    </div>
    // <div>
    //   <Navbar
    //     color="dark"
    //     expand="md"
    //   >
    //     <NavbarBrand href="/">
    //       Homework
    //     </NavbarBrand>
    //     <NavbarToggler onClick={function noRefCheck() { }} />
    //     <Collapse navbar>
    //       <Nav
    //         className="me-auto"
    //         navbar
    //       >
    //         <NavItem>
    //           <NavLink href="/components/">
    //             Components
    //           </NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://github.com/reactstrap/reactstrap">
    //             GitHub
    //           </NavLink>
    //         </NavItem>
    //         <UncontrolledDropdown
    //           inNavbar
    //           nav
    //         >
    //           <DropdownToggle
    //             caret
    //             nav
    //           >
    //             Options
    //           </DropdownToggle>
    //           <DropdownMenu right>
    //             <DropdownItem>
    //               Option 1
    //             </DropdownItem>
    //             <DropdownItem>
    //               Option 2
    //             </DropdownItem>
    //             <DropdownItem divider />
    //             <DropdownItem>
    //               Reset
    //             </DropdownItem>
    //           </DropdownMenu>
    //         </UncontrolledDropdown>
    //       </Nav>
    //       <NavbarText>
    //         Simple Text
    //       </NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>

  );
}

export default App;
