import React from 'react';
import { Icon, Nav, Navbar } from 'rsuite';
import NavItem from 'rsuite/es/Nav/NavItem';
import { useCart } from '../misc/cart.context';

const Navigationbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Navbar>
      <Navbar.Header>
        <h4>
          <a href="/">E-Commerce Shopping Cart App</a>
        </h4>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <NavItem href="/checkout" icon={<Icon icon="shopping-bag" />}>
            Cart
          </NavItem>
          <NavItem href="/checkout">{cartItemsTotal}</NavItem>
          <NavItem href="/checkout">$ {cartPriceTotal}</NavItem>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Navigationbar;
