import React, { useContext } from 'react';
import ProductBox from './ProductList/productBox';
import Sort from './Filter/sort';
import Collection from './Filter/collection';
import StoreContext from '../context/store';

const ProductList = ({ data }) => {
  const { edges: products } = data.allShopifyProduct;
  const context = useContext(StoreContext);

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div
            className="columns is-mobile"
            style={{ marginBottom: '60px', margin: '0', padding: '20px' }}
          >
            <div className="column is-12-desktop is-12-mobile">
              <Sort context={context} />
            </div>
          </div>
          {/* <div className="column is-6-desktop is-12-mobile">
              <Collection context={context} products={products} />
            </div> */}
          <div className="columns is-multiline" style={{ margin: '0' }}>
            {products
              .filter((p, i) =>
                context.store.filteredType === 'all' && i < 10
                  ? p
                  : p.node.productType.includes(context.store.filteredType)
              )
              .sort(
                context.store.filteredSort === 'featured'
                  ? a => a
                  : context.store.filteredSort === 'low'
                  ? (a, b) =>
                      a.node.variants[0].price - b.node.variants[0].price
                  : context.store.filteredSort === 'high'
                  ? (a, b) =>
                      b.node.variants[0].price - a.node.variants[0].price
                  : context.store.filteredSort === 'Z-A'
                  ? (a, b) => b.node.title.localeCompare(a.node.title)
                  : context.store.filteredSort === 'A-Z'
                  ? (a, b) => a.node.title.localeCompare(b.node.title)
                  : null
              )
              .map((p, i) => {
                const product = p;
                return (
                  <div
                    className="column is-3"
                    style={{ marginBottom: '40px' }}
                    key={i.toString()}
                  >
                    <ProductBox product={product} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
