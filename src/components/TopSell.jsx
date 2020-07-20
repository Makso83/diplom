import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from './CollectionCard';
import { getTopSales } from '../fetchFunctions/fetchFunctions';
import ErrorMessage from './ErrorMessage';
import Preloader from './Preloader';

function TopSell() {
  const dispatch = useDispatch();
  const { items, isFetching, error } = useSelector((state) => state.topSales);
  useEffect(() => {
    dispatch(getTopSales());
  }, [dispatch]);

  const tryAgain = () => {
    dispatch(getTopSales());
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
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {!isFetching
          ? items.map((item) => <CollectionCard key={item.id} item={item} />)
          : (
            <Preloader />
          )}
      </div>
    </section>
  );
}

export default TopSell;
