//@ts-check
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarFirst from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterPage from './components/Footer/FooterPage';
import Cart from './components/Cart/Cart';

// import cartContext.js 
import CartProvider from './context/CartContext';


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
            <Route path='/*' element={<h3>Error</h3>} />
          </Routes>

          <FooterPage />
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
