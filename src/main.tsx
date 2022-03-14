import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Favourite from './favourite';
import Products from './products';
import T from './t';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='products' element={<Products />} />
          <Route path='favourite' element={<Favourite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
