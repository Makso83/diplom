import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CollectionCard from './CollectionCard';
import Preloader from './Preloader';
import ErrorMessage from './ErrorMessage';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';

function Catalog(props) {

  const {items, isFetching} = props;

  return (
    <div className="row">
      {!isFetching
        ? items.map((item) => <CollectionCard key={item.id} item={item} />)
        : <Preloader />}
    </div>
  );
}

export default Catalog;
