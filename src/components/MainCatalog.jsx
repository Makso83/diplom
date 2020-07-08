import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import CategoryGallery from './CategoryGallery';
import Catalog from './Catalog';
import GetMoreButton from './GetMoreButton';
import CatalogSearch from './CatalogSearch';

function MainCatalog(props) {
  const { search } = props;
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {search ? (
        <CatalogSearch />
      ) : null}
      <Categories />
      <CategoryGallery />
      <Catalog />
      <GetMoreButton />
    </section>
  );
}

export default MainCatalog;
