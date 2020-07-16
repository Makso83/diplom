import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import nophoto from '../img/nophoto.png';
import ItemPropsTable from './ItemPropsTable';
import { addItemToCartAC } from '../actions/cartAC';

function ItemCard(props) {
  const {
    id,
    title,
    images,
    sku,
    manufacturer,
    color,
    material,
    reason,
    season,
    price,
    sizes,
  } = props.item;

  const [counter, setCounter] = useState(1);
  const picture = useRef();
  const dispatch = useDispatch();
  const [currentSize, setCurrentSize] = useState(null);

  const isAvailable = () => {
    if (sizes !== undefined) {
      return sizes.filter((size) => size.avalible).length > 0;
    }
  };

  const isItemAvailable = isAvailable();
  const isToCartButtonEnable = isItemAvailable && (currentSize !== null);

  const noPhoto = () => {
    picture.current.src = nophoto;
  };

  const avalibleSizes = sizes !== undefined
    ? sizes.filter((size) => size.avalible)
      .map((size) => (
        <span
          key={size.size}
          onClick={() => setCurrentSize(size.size)}
          className={`catalog-item-size ${size.size === currentSize ? 'selected' : null}`}
        >
          {size.size}
        </span>
      ))
    : null;

  const counterIncrement = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const counterDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(addItemToCartAC(title, id, currentSize, counter, price));
  };

  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img
            ref={picture}
            src={images !== undefined ? images[0] : null}
            className="img-fluid"
            alt=""
            onError={noPhoto}
          />
        </div>
        <div className="col-7">
          <ItemPropsTable params={{
            sku, manufacturer, material, season, reason, color,
          }}
          />
          <div className="text-center">
            <p>
              Размеры в наличии:
              {avalibleSizes}
            </p>
            {isItemAvailable ? (
              <p>
                Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button className="btn btn-secondary" onClick={counterDecrement}>-</button>
                  <span className="btn btn-outline-primary">{counter}</span>
                  <button className="btn btn-secondary" onClick={counterIncrement}>+</button>
                </span>
              </p>
            ) : <p>нет в наличии</p>}
          </div>
          {isItemAvailable
            ? (
              <button
                className="btn btn-danger btn-block btn-lg"
                onClick={addToCartHandler}
                disabled={!isToCartButtonEnable}
              >
                В корзину
              </button>
            )
            : null }
        </div>
      </div>
    </section>
  );
}

export default ItemCard;
