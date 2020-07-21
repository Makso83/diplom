import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendOrder } from '../fetchFunctions/fetchFunctions';
import { clearCartAC } from '../actions/cartAC';
import Preloader from './Preloader';
import { checkoutFieldChangedAC } from '../actions/checkoutAC';
import { orderClearAC } from '../actions/orderAC';
import ErrorMessage from './ErrorMessage';

function Checkout({ history }) {
  const { isFetchingOrder, orderSuccess, error } = useSelector((state) => state.order);
  const orderList = useSelector((state) => state.cart).map((item) => ({
    id: item.id,
    price: item.price,
    count: item.quantity,
  }));

  const { phone, address, agreement } = useSelector((state) => state.checkout);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderSuccess) {
      dispatch(clearCartAC());
      dispatch(orderClearAC());
      history.push('/success');
    }
  }, [orderSuccess, dispatch, history]);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const checkoutOrder = {
      owner: {
        phone,
        address,
      },
      items: orderList,
    };
    const orderJSON = JSON.stringify(checkoutOrder);
    dispatch(sendOrder(orderJSON));
  };

  if (error !== null) {
    return (
      <ErrorMessage>
        <p>Не удалось разместить заказ. Попробуйте позднее.</p>
      </ErrorMessage>
    );
  }

  if (isFetchingOrder) {
    return <Preloader />;
  }

  const isFormFilled = () => (phone !== '') && (address !== '') && (agreement);

  const onInputHandler = (evt) => {
    if (evt.target.id === 'agreement') {
      dispatch(checkoutFieldChangedAC(evt.target.id, evt.target.checked));
      return;
    }
    dispatch(checkoutFieldChangedAC(evt.target.id, evt.target.value));
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input onChange={onInputHandler} className="form-control" id="phone" placeholder="Ваш телефон" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input onChange={onInputHandler} className="form-control" id="address" placeholder="Адрес доставки" />
          </div>
          <div className="form-group form-check">
            <input onChange={onInputHandler} type="checkbox" className="form-check-input" id="agreement" />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button disabled={!isFormFilled()} type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>

      </div>
    </section>
  );
}

export default withRouter(Checkout);
