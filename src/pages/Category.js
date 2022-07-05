import React, { useState } from 'react';
import { useParams } from 'react-router';
import givenProducts from '../database/products.json';
import categories from '../database/categories.json';
import Products from '../components/Products';

const Category = ({ category }) => {
  const [products] = useState(
    givenProducts.filter(p => p.categoryId === category.id)
  );

  return <Products products={products} />;
};

const CategoryContainer = () => {
  // this has to be done to conditionally render the useState in Category. Now app doesn't crash when id is not valid
  const { id } = useParams();

  const category = categories.find(c => c.id === id);

  if (!category) {
    return <div>Category with id {id} does not exist</div>;
  }

  return <Category category={category} />;
};

export default CategoryContainer;
