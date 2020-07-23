import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorMessage from './ErrorMessage';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';
import Catalog from './Catalog';

function CatalogContainer() {
  const {
    currentCategory, items, isFetching, error,
  } = useSelector((state) => state.catalog);

  const dispatch = useDispatch();

  const { searchWord } = useSelector((state) => state.searchStatus);
  
  useEffect(() => {
    dispatch(getCatalogItemBySearch(currentCategory, searchWord));
  }, [currentCategory, dispatch, searchWord]);

  const tryAgain = () => {
    dispatch(getCatalogItemBySearch(currentCategory, searchWord));
  };

  if (error !== null) {
    return (
      <ErrorMessage>
        <p>Не удалось загрузить данные с сервера...</p>
        <button type="button" onClick={tryAgain}>Попробовать снова</button>
      </ErrorMessage>
    );
  }

  return (
    <Catalog items={items} isFetching={isFetching} />
  );
}

export default CatalogContainer;
