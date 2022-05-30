//@ts-check
import React from 'react';
// import cartContext.js 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import CartDetailCheckOut from './components/CartDetailCheckOut/CartDetailCheckOut';
import FooterPage from './components/Footer/FooterPage';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';
import CartProvider from './context/CartContext';

import './App.css';

function App() {
  return (
    <>
      {/* agrego el context */}
      <CartProvider>
        <BrowserRouter>

          <NavBarFirst />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/checkout' element={<CartDetailCheckOut />} />   */}
            <Route path='/*' element={<h3>Error</h3>} />
          </Routes>

          <FooterPage />
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
