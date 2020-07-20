import React from 'react';
import Categories from './Categories';
import CategoryGallery from './CategoryGallery';
import GetMoreButton from './GetMoreButton';
import CatalogSearch from './CatalogSearch';
import CatalogContainer from './CatalogContainer';

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
      <CatalogContainer />
      <GetMoreButton />
    </section>
  );
}

export default MainCatalog;
