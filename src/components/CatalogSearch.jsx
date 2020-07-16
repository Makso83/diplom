import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFieldChanged } from '../actions/searchAC';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';

function CatalogSearch() {
  const { searchWord } = useSelector((state) => state.searchStatus);
  const { currentCategory } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const searchInput = useRef();
  const onInputChanged = () => {
    dispatch(searchFieldChanged(searchInput.current.value));
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
        ref={searchInput}
        className="form-control"
        placeholder="Поиск"
        value={searchWord}
        onChange={onInputChanged}
      />
    </form>
  );
}

export default CatalogSearch;
