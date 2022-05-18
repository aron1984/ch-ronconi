import React from 'react';
import { Container } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';
import TestFetch from './components/TestPokeApi/TestPokeApi';

function App() {
  return (

    <>
      <NavBarFirst />

      <Container>
        {/* <header>
        <h1>Ofertas</h1>
        </header> */}

        {/* <div className='container items'> */}
          <ItemListContainer />
        {/* </div> */}


        <TestFetch />
      </Container>


    </>

  );
}

export default App;
