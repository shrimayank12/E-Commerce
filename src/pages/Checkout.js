import React, { useCallback, useState } from 'react';
import { useCart, useCartDispatch } from '../misc/cart.context';
import PRODUCTS from '../database/products.json';

function getComputedCheckedoutItems(products, cartItems) {
  const productsInCart = products.filter(p =>
    cartItems.some(item => item.id === p.id)
  );

  return productsInCart.map(product => {
    return {
      ...product,
      quantity: cartItems.find(item => item.id === product.id).quantity,
    };
  });
}

const Checkout = () => {
  const cart = useCart();
  const dispatchCart = useCartDispatch();
  const [products] = useState(PRODUCTS);

  const checkoutItems = getComputedCheckedoutItems(products, cart);

  const handleAdd = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ONE', id });
    },
    [dispatchCart]
  );

  const handleRemoveOne = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE_ONE', id });
    },
    [dispatchCart]
  );

  const handleRemove = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE', id });
    },
    [dispatchCart]
  );

  return (
    <div>
      {checkoutItems.map(el => (
        <div key={el.id}>
          <img src={el.thumbnail} alt={el.name} width={30} />
          <span>{el.name}</span>
          <span>
            | {el.currency} {el.price}
          </span>
          <span> | </span>
          <button type="button" onClick={() => handleRemoveOne(el.id)}>
            -
          </button>
          <span>{el.quantity}</span>
          <button type="button" onClick={() => handleAdd(el.id)}>
            +
          </button>
          <span> | </span>
          <button type="button" onClick={() => handleRemove(el.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
