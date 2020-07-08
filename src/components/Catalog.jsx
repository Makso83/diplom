import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CollectionCard from './CollectionCard';
import Preloader from './Preloader';
import ErrorMessage from './ErrorMessage';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';
import { searchClearAC } from '../actions/searchAC';

function Catalog() {
  const {
    currentCategory, items, isFetching, offset, error,
  } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { searchWord } = useSelector((state) => state.searchStatus);
  useEffect(() => {
    dispatch(getCatalogItemBySearch(currentCategory, searchWord));
  }, [currentCategory, dispatch]);

  if (error !== null) {
    return (
      <ErrorMessage>
        <p>Не удалось загрузить данные с сервера...</p>
        <a href="/">Попробовать снова</a>
      </ErrorMessage>
    );
  }

  return (
    <div className="row">
      {!isFetching
        ? items.map((item) => <CollectionCard key={item.id} item={item} />)
        : <Preloader />}
    </div>
  );
}

export default Catalog;
