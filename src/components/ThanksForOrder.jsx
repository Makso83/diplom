import React from 'react';
import { NavLink } from 'react-router-dom';

function ThanksForOrder() {
  return (
    <div>
      <h2>Спасибо за заказ!</h2>
      <NavLink to='/' className="btn btn-outline-primary">Перейти на Главную</NavLink>
    </div>
  );
}

export default ThanksForOrder;
