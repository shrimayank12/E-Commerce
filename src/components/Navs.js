import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { ReactComponent } from '../images/Cart_Icon.svg';
import { useCart } from '../misc/cart.context';

const LINKS = [{ link: '/', text: 'Home' }];

const Navs = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Navbar color="light" light className="px-0 border-bottom mb-4">
      <Nav className="mr-auto" navbar>
        {LINKS.map(({ link, text }) => (
          <NavItem key={link}>
            <NavLink to={link} tag={Link}>
              <h1>{text}</h1>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <Nav>
        <h1>Shopping Cart App</h1>
      </Nav>
      <NavbarText>
        <Link
          to="/checkout"
          className="d-flex align-items-center"
          style={{ textDecoration: 'none' }}
        >
          <h3>Cart</h3>
          <ReactComponent width={50} />
          <div
            className="circle bg-dark text-light rounded-circle d-flex justify-content-center align-items-center mx-2"
            style={{ width: 50, height: 50 }}
          >
            <h3>{cartItemsTotal}</h3>
          </div>
          <h3>${cartPriceTotal}</h3>
        </Link>
      </NavbarText>
    </Navbar>
  );
};

export default Navs;
