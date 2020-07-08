import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../fetchFunctions/fetchFunctions';
import CategoryLinks from './CategoryLinks';
import Preloader from './Preloader';
import ErrorMessage from './ErrorMessage';

function Categories() {
  const dispatch = useDispatch();
  const { items, error, isFetching } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (error !== null) {
    return (
      <ErrorMessage>
        <p>Не удалось загрузить данные с сервера...</p>
        <a href="/">Попробовать снова</a>
      </ErrorMessage>
    );
  }

  return (
    <>
      {isFetching ? <Preloader />
        : (
          <ul className="catalog-categories nav justify-content-center">
            {items.map((item) => <CategoryLinks key={item.id} item={item} />)}
          </ul>
        )}
    </>
  );
}

export default Categories;
