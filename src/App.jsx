import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';

import { addCartToLocalStorage } from './actions/cartAC';

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    addCartToLocalStorage(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <MainHeader />
      <MainContent />
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
