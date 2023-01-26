import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  return (
    <div className="container pt-4">
      <div className="row">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default CategoryList;
