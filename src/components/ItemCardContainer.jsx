import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getItemById } from '../fetchFunctions/fetchFunctions';
import ItemCard from './ItemCard';
import ErrorMessage from './ErrorMessage';
import Preloader from './Preloader';

function ItemCardContainer(props) {
  const { item, isFetching, error } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemById(props.match.params.itemID));
  }, [dispatch, props.match.params.itemID]);

  if (error !== null) {
    return (<ErrorMessage>Не удается получить данные о товаре.</ErrorMessage>);
  }

  return (
    <>
      {isFetching ? <Preloader /> : <ItemCard key={props.match.params.itemID} item={item} />}
    </>
  );
}

export default withRouter(ItemCardContainer);
