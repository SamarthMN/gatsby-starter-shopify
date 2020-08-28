import React from 'react';
import { colorPalette } from './../../../constants';

const ProductInfo = ({ product }) => {
  const price = `₹${product.variants[0].price}`;
  // console.log(product.variants[0]);
  // const compareAtPrice = `₹${product.variants[0].compareAtPrice}`;
  return (
    <>
      <p className="has-text-weight-semibold is-size-2">{product.title}</p>
      <p className="is-size-4 has-text-grey-dark">
        <div style={{ display: 'flex' }}>
          <div
            style={{
              color: colorPalette.primaryText,
              paddingRight: '1em',
              fontWeight: 'bold'
            }}
          >
            {price}
          </div>
          {/* {product.variants[0].compareAtPrice ? (
            <del>{compareAtPrice}</del>
          ) : null} */}
        </div>
      </p>
    </>
  );
};

export default ProductInfo;
