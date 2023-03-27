import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SearchValueContextProvider } from './context/searchValueContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <SearchValueContextProvider >
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchValueContextProvider>
    </div>
  );
}

export default App;
