import React from 'react';
import CategoryItem from './CategoryItem';
import stay from './stay.jpg';
import adventure from './adventure.jpg';
import experience from './experience.jpg';
import restaurant from './restaurant.jpg';

const CategoryList = () => {
  const categoryList = [
    {
      categoryName: 'Stays',
      description: 'Homes, Boutique & more',
      image: stay,
    },
    {
      categoryName: 'Experiences',
      description: 'Activities hosted by locals',
      image: experience,
    },
    {
      categoryName: 'Adventures',
      description: 'Hosted trips including lodging',
      image: adventure,
    },
    {
      categoryName: 'Restaurants',
      description: 'Popular spots to eat & drink',
      image: restaurant,
    },
  ];

  const categories = categoryList.map((category, i) => (
    <CategoryItem key={i} category={category} />
  ));

  return (
    <div className="container pt-4">
      <div className="row">{categories}</div>
    </div>
  );
};

export default CategoryList;
