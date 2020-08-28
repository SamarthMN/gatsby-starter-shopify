import { Link } from 'gatsby'; /* eslint-disable */
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import StoreContext from '../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { colorPalette } from '../../constants';

const countQuantity = lineItems => {
  let quantity = 0;

  lineItems.forEach(item => {
    quantity = quantity + item.quantity;
  });
  return quantity;
};

const Header = ({ siteTitle }) => {
  const context = useContext(StoreContext);
  const { checkout } = context.store;
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  );

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ display: 'flex', backgroundColor: colorPalette.primary }}
      >
        <div
          className="navbar-start"
          style={{
            marginLeft: '30px',
            width: '100%',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <h1 className="subtitle">
            <Link
              aria-label="search"
              className="has-text-black has-text-weight-bold"
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="navbar-end" style={{ display: 'flex' }}>
          <div className="navbar-item" className="nav__icon">
            <Link aria-label="cart" to="/account/login">
              <FontAwesomeIcon
                icon={faUser}
                className="is-size-5 has-text-dark"
              />
            </Link>
          </div>
          <div className="navbar-item" className="nav__icon">
            <Link aria-label="cart" to="/cart">
              {quantity > 0 ? (
                <>
                  <div className="shopping-bag-quantity">{quantity}</div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="is-size-5 has-text-dark"
                  />
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="is-size-5 has-text-dark"
                />
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
