import React, { useCallback } from 'react';
import { Alert, Button } from 'rsuite';
import { useCartDispatch } from '../misc/cart.context';

const Products = ({ products }) => {
  const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        return;
      }
      dispatchCart({ type: 'ADD_ONE', id, price });
      Alert.info('Item Added To Cart', 2000);
    },
    [dispatchCart]
  );

  if (products.length === 0) {
    return <div>No Products Found</div>;
  }

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
        <Button
          appearance="ghost"
          disabled={!inStock}
          onClick={() => handleAddToCart(restOfProduct.id, price, inStock)}
        >
          Add to Cart
        </Button>
      </div>
    )
  );
};

export default Products;
