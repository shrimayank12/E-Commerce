import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { CardGroup, Col, Row } from 'reactstrap';
import givenProducts from '../database/products.json';
import categories from '../database/categories.json';
import Products from '../components/Products';
import FilterCheckBox from '../components/FilterCheckbox';
import { useFilters } from '../misc/useFilters';

function getFilteredProducts(products, filters) {
  let result = [...products];

  if (filters.delivery) {
    result = result.filter(p => p.delivery === true);
  }

  if (filters.inStock) {
    result = result.filter(p => p.inStock === true);
  }

  if (filters.expensive) {
    result = result.filter(p => p.price > 100);
  }

  return result;
}

const Category = ({ category }) => {
  const [products] = useState(
    givenProducts.filter(p => p.categoryId === category.id)
  );

  const [filter, dispatchFilter] = useFilters({
    delivery: false,
    inStock: false,
    expensive: false,
  });

  const filteredProducts = getFilteredProducts(products, filter);

  const onCheckboxChange = useCallback(
    ev => {
      const checkbox = ev.target;

      dispatchFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );

  return (
    <Row>
      <Col xs={12} md={3} className="position-relative">
        <div className="fixed-md">
          <h2 className="h3">Filters</h2>
          <FilterCheckBox
            id="delivery"
            name="delivery"
            checked={filter.delivery}
            onChange={onCheckboxChange}
            label="Delivery"
          />
          <FilterCheckBox
            id="inStock"
            name="inStock"
            checked={filter.inStock}
            onChange={onCheckboxChange}
            label="In stock only"
          />
          <FilterCheckBox
            id="expensive"
            name="expensive"
            checked={filter.expensive}
            onChange={onCheckboxChange}
            label="Expensive (100+ USD)"
          />
          <div className="mt-">
            Showing {filteredProducts.length} out of {products.length}
          </div>
        </div>
      </Col>
      <Col xs={12} md={9}>
        <h1 className="h3">{category.name}</h1>
        <CardGroup>
          <Products products={filteredProducts} />
        </CardGroup>
      </Col>
    </Row>
  );
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
