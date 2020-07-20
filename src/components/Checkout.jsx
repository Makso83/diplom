import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendOrder } from '../fetchFunctions/fetchFunctions';
import { clearCartAC } from '../actions/cartAC';
import Preloader from './Preloader';

function Checkout({ history }) {
  const [isFetching, setIsFetching] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const order = useSelector((state) => state.cart).map((item) => ({
    id: item.id,
    price: item.price,
    count: item.quantity,
  }));
  const dispatch = useDispatch();
  const phoneRef = useRef();
  const adressRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();
    setIsFetching(true);
    const checkoutOrder = {
      owner: {
        phone: phoneRef.current.value,
        address: adressRef.current.value,
      },
      items: order,
    };
    const orderJSON = JSON.stringify(checkoutOrder);
    sendOrder(orderJSON);
    dispatch(clearCartAC());
    history.push('/success');
    setIsFetching(false);
  };

  if (isFetching) {
    return <Preloader />;
  }

  const isFormFilled = () => {
    if (phoneRef.current !== undefined) {
      const check = (phoneRef.current.value !== '') && (adressRef.current.value !== '');
      return check;
    }
    return false;
  };

  const onInputHandler = () => {
    setButtonDisabled(!isFormFilled());
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input onChange={onInputHandler} className="form-control" id="phone" placeholder="Ваш телефон" ref={phoneRef} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input onChange={onInputHandler} className="form-control" id="address" placeholder="Адрес доставки" ref={adressRef} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agreement" />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button disabled={buttonDisabled} type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>

      </div>
    </section>
  );
}

export default withRouter(Checkout);
