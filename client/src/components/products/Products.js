import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductItem from './ProductItem';
import Spinner from '../layout/Spinner';
import ProductContext from '../../context/product/productContext';

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, filtered, getProducts, loading } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  if (products !== null && products.length === 0 && !loading) {
    return <h4>Please add a product</h4>;
  }

  return (
    <Fragment>
      {products !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(product => (
                <CSSTransition
                  key={product._id}
                  timeout={500}
                  classNames='item'
                >
                  <ProductItem product={product} />
                </CSSTransition>
              ))
            : products.map(product => (
                <CSSTransition
                  key={product._id}
                  timeout={500}
                  classNames='item'
                >
                  <ProductItem product={product} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Products;
