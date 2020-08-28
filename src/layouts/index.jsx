import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Provider from '../context/provider';
import './layout.sass';

const Layout = ({ children }) => {
  return (
    <Provider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className="main__container">
            <div className="main__content">
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
            </div>
            <Footer />
          </div>
        )}
      />
    </Provider>
  );
};

export default Layout;
