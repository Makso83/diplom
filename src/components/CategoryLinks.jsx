import React from 'react';
import { categoryChandegAC } from '../actions/catalogAC';
import { useSelector, useDispatch } from 'react-redux';

function CategoryLinks(props) {
  const { id, title } = props.item;
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.catalog);
  const onCategorySelectHandler = (evt) => {
    evt.preventDefault();
    dispatch(categoryChandegAC(id));
  };
  const isActive = () => id === currentCategory;

  return (
    <li className="nav-item">
      <a className={`nav-link ${isActive() ? 'active' : null}`} href="/" onClick={onCategorySelectHandler}>{title}</a>
    </li>
  );
}

export default CategoryLinks;
