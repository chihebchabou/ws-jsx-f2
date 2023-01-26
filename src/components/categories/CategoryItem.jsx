import React from 'react';

const CategoryItem = props => {
  console.log(props); // {category: {...}}
  const { category } = props;
  const { image, categoryName, description } = category;
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img
          src={image}
          alt=""
          className="card-img-top"
          style={{ height: 200, objectFit: 'cover' }}
        />
        <div className="card-body">
          <h3 className="text-primary">{categoryName}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
