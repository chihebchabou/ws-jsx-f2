import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import CategoryList from './components/categories/CategoryList';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CategoryList />
    </Fragment>
  );
};

export default App;
