import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import Banner from './Banner';
import bannerImg from '../img/banner.jpg';
import PageNotFound from './PageNotFound';

function MainContent() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner image={bannerImg} imgAlt="К весне готовы" bannerHeader="К весне готовы!" />
          <Switch>
            <Route path="/about.html" component={About} />
            <Route path="/contacts.html" component={Contacts} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
