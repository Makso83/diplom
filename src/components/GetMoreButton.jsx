import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogItems } from '../fetchFunctions/fetchFunctions';
import { incrementOffset, catalogGetMoreAC } from '../actions/catalogAC';
import Preloader from './Preloader';

function GetMoreButton() {
  const {
    currentCategory, offset, showNoMore, fetchingMore, isFetching,
  } = useSelector((state) => state.catalog);
  const { searchWord } = useSelector((state) => state.searchStatus);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(catalogGetMoreAC());
    dispatch(getCatalogItems(currentCategory, offset + 1, searchWord));
    dispatch(incrementOffset());
  };

  const buttonRender = () => {
    if (showNoMore || isFetching) return null;
    return fetchingMore ? <Preloader />
      : (
        <div className="text-center">
          <button type="button" className="btn btn-outline-primary" onClick={onClickHandler}>Загрузить ещё</button>
        </div>
      );
  };

  return (
    <>
      { buttonRender() }

    </>
  );
}

export default GetMoreButton;
