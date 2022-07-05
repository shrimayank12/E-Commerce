import React from 'react';
import { Button } from 'rsuite';

const Products = ({ products }) => {
  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
      <div key={restOfProduct.id}>
        <img src={thumbnail} alt={name} width={50} />
        <div>{name}</div>
        <div>
          {currency} {price}
        </div>
        <div>{inStock ? 'In Stock' : 'Out of Stock'}</div>
        {delivery && <div>Delivery Avaliable</div>}
        <Button>Add to Cart</Button>
      </div>
    )
  );
};

export default Products;
