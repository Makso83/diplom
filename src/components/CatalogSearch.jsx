import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFieldChanged } from '../actions/searchAC';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';

function CatalogSearch() {
  const { searchWord } = useSelector((state) => state.searchStatus);
  const { currentCategory } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const onInputChanged = (evt) => {
    dispatch(searchFieldChanged(evt.target.value));
  };

  const onSearchSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getCatalogItemBySearch(currentCategory, searchWord));
  };

  return (
    <form
      className="catalog-search-form form-inline"
      onSubmit={onSearchSubmit}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        value={searchWord}
        onChange={onInputChanged}
      />
    </form>
  );
}

export default CatalogSearch;
