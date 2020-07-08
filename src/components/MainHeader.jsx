import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mainLogo from '../img/header-logo.png';
import { searchButtonPressed } from '../actions/searchAC';
import HeaderMenu from './HeaderMenu';
import HeaderCart from './HeaderCart';
import SearchForm from './SearchForm';
import { getCatalogItemBySearch } from '../fetchFunctions/fetchFunctions';

function MainHeader({ history }) {
  const dispatch = useDispatch();
  const { searchInvisible, searchWord } = useSelector((state) => state.searchStatus);
  const { currentCategory } = useSelector((state) => state.catalog);

  const onSearchClick = () => {
    if (!searchInvisible) {
      if (searchWord !== '') {
        history.push('/catalog');
      }
      dispatch(getCatalogItemBySearch(currentCategory, searchWord));
    }

    dispatch(searchButtonPressed());
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={mainLogo} alt="Bosa Noga" />
            </a>

            <div className="collapse navbar-collapse" id="navbarMain">
              <HeaderMenu />
              <div>
                <div className="header-controls-pics">
                  <div onClick={onSearchClick} data-id="search-expander" className="header-controls-pic header-controls-search" />
                  <HeaderCart />
                </div>
                <SearchForm />
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default withRouter(MainHeader);
