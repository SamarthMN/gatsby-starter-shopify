import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '3rem 1.5rem 2rem' }}>
      <div className="content has-text-centered">
        <div className="level">
          <div className="level-item" style={{ flexDirection: 'column' }}>
            <p className="footer__title">Links</p>
            <p className="footer__title__links">
              <Link to="/contactus" style={{ color: 'grey' }}>
                Contact Us
              </Link>
            </p>
          </div>
          <div className="level-item" style={{ flexDirection: 'column' }}>
            <p className="footer__title">Follow Us</p>
            <p className="footer__title__links">
              <a href="/" style={{ color: 'grey' }}>
                Instagram
              </a>
            </p>
            <p className="footer__title__links">
              <a href="/" style={{ color: 'grey' }}>
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="content has-text-centered">
        <div className="level">
          <div className="level-item">
            <p>Copyright © 2020 - company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
