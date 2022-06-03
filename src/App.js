//@ts-check
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget';
import FooterPage from './components/Footer/FooterPage';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import PageNotFound from './components/messages/PageNotFound/PageNotFound';
import NavBarFirst from './components/NavBar';
import CartProvider from './context/CartContext';



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBarFirst />
          <CartWidget />

          <Container className='mx-auto mb-12'>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              {/* <Route path='/form' element={<FormEdit />} /> */}
              {/* <Route path='/checkout' element={<CartDetailCheckOut />} />   */}
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </Container>
          <FooterPage />
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
