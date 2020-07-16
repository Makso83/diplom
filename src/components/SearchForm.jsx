import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFieldChanged } from '../actions/searchAC';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';

function SearchForm() {
  const { searchInvisible, searchWord } = useSelector((state) => state.searchStatus);
  const { currentCategory } = useSelector((state) => state.catalog);
  const searchHeaderInput = useRef();
  const dispatch = useDispatch();

  const onInputChange = () => {
    dispatch(searchFieldChanged(searchHeaderInput.current.value));
  };

  const onSearchSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getCatalogItemBySearch(currentCategory, searchWord));
  };

  return (
    <form
      onSubmit={onSearchSubmit}
      data-id="search-form"
      className={`header-controls-search-form form-inline ${searchInvisible ? 'invisible' : null}`}
    >
      <input onChange={onInputChange} ref={searchHeaderInput} className="form-control" value={searchWord} placeholder="Поиск" />
    </form>
  );
}

export default SearchForm;
