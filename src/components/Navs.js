import React from 'react';
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/checkout">Go to Checkout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navs;
