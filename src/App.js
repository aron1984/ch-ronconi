import React from 'react';
import { Container } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';
// import TestFetch from './components/TestPokeApi/TestPokeApi';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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



        {/* Test ItemDetail */}
        <ItemDetailContainer />


        {/* <TestFetch /> */}
      </Container>


    </>

  );
}

export default App;
