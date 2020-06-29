import React from 'react';
import mainLogo from '../img/header-logo.png';
import HeaderMenu from './HeaderMenu';
import HeaderCart from './HeaderCart';
import SearchForm from './SearchForm';

function MainHeader() {
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
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" />
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

export default MainHeader;
