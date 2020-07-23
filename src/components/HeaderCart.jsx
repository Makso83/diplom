import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function HeaderCart() {
  const cart = useSelector((state) => state.cart);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartNum(quantity);
  }, [cart]);

  const isVisible = cartNum > 0;

  return (
    <NavLink to="/cart" className="header-controls-pic header-controls-cart">
      {isVisible ? (<div className="header-controls-cart-full">{cartNum}</div>) : null}
      <div className="header-controls-cart-menu" />
    </NavLink>
  );
}

export default HeaderCart;
