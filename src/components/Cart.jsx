import React from 'react';
import { useSelector } from 'react-redux';
import CartLine from './CartLine';
import Checkout from './Checkout';

function Cart() {
  const cart = useSelector((state) => state.cart);
  let nn = 0;
  const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            nn += 1;
            return <CartLine key={nn} nn={nn} item={item} />;
          })}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>{`${totalSum} руб.`}</td>
          </tr>
        </tbody>
      </table>
    </section>
    {cart.length !== 0 ? <Checkout /> : null}
    </>
  );
}

export default Cart;
