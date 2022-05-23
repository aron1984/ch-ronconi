//@ts-check
import React from 'react';
// import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';
// import TestFetch from './components/TestPokeApi/TestPokeApi';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterPage from './components/Footer/FooterPage';
import Cart from './components/Cart/Cart';


function App() {
  return (
    
      <BrowserRouter>

        <NavBarFirst />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<h3>Error</h3>} />
        </Routes>

        <FooterPage />
      </BrowserRouter>

    
  );
}

export default App;
