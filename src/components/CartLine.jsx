import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCartAC } from '../actions/cartAC';

function CartLine(props) {
  const {
    id, title, size, quantity, price,
  } = props.item;

  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(removeItemFromCartAC(id));
  };

  return (
    <tr>
      <th scope="row">{props.nn}</th>
      <td><a href="/products/1.html">{title}</a></td>
      <td>{size}</td>
      <td>{quantity}</td>
      <td>{`${price} руб.`}</td>
      <td>{`${price * quantity} руб.`}</td>
      <td>
        <button
          type="button"
          onClick={onDeleteHandler}
          className="btn btn-outline-danger btn-sm"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default CartLine;
