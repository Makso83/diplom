import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from './CollectionCard';
import { getTopSales } from '../fetchFunctions/fetchFunctions';
import ErrorMessage from './ErrorMessage';

function TopSell() {
  const dispatch = useDispatch();
  const { items, isFetching, error } = useSelector((state) => state.topSales);
  useEffect(() => {
    dispatch(getTopSales());
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
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {/* TODO: заменить на прелоадер компонент */}
      <div className="row">
        {!isFetching
          ? items.map((item) => <CollectionCard key={item.id} item={item} />)
          : (
            <div className="preloader">
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
      </div>
    </section>
  );
}

export default TopSell;
