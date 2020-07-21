import React from 'react';
import CollectionCard from './CollectionCard';
import Preloader from './Preloader';

function Catalog(props) {
  const { items, isFetching } = props;

  return (
    <div className="row">
      {!isFetching
        ? items.map((item) => <CollectionCard key={item.id} item={item} />)
        : <Preloader />}
    </div>
  );
}

export default Catalog;
