import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainContent />
      <MainFooter />      
    </BrowserRouter>
  );
}

export default App;
