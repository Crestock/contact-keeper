import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  FILTER_PRODUCTS,
  CLEAR_PRODUCTS,
  CLEAR_FILTER,
  PRODUCT_ERROR
} from '../types';

const ProductState = props => {
  const initialState = {
    products: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get('/api/products');

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Product
  const addProduct = async product => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/products', product, config);

      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Product
  const deleteProduct = async id => {
    try {
      await axios.delete(`/api/products/${id}`);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Product
  const updateProduct = async product => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      );

      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Products
  const clearProducts = () => {
    dispatch({ type: CLEAR_PRODUCTS });
  };

  // Set Current Product
  const setCurrent = product => {
    dispatch({ type: SET_CURRENT, payload: product });
  };

  // Clear Current Product
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Products
  const filterProducts = text => {
    dispatch({ type: FILTER_PRODUCTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addProduct,
        deleteProduct,
        setCurrent,
        clearCurrent,
        updateProduct,
        filterProducts,
        clearFilter,
        getProducts,
        clearProducts
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
