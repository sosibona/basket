import {
  fetchProductsList,
  createProduct,
  updateProducts,
  deleteProduct,
} from "./productGateway";
import { productsSelector } from "./products.selectors";

export const PRODUCT_LIST_RECIEVED = "PRODUCT_LIST_RECIEVED";
export const SORT_PRODUCT = "SORT_PRODUCT";

export const productListRecieved = (productList) => {
  return {
    type: PRODUCT_LIST_RECIEVED,
    payload: {
      productList,
    },
  };
};

export const getProductList = () => {
  return function (dispatch) {
    fetchProductsList().then((productList) =>
      dispatch(productListRecieved(productList))
    );
  };
};

export const addProduct = (productData) => {
  return function (dispatch) {
    createProduct(productData).then(() => dispatch(getProductList()));
  };
};

export const deletedProduct = (id) => {
  return function (dispatch) {
    deleteProduct(id).then(() => dispatch(getProductList()));
  };
};

export const updateProduct = (id, count) => {
  return function (dispatch, getState) {
    const products = getState();
    const product = productsSelector(products).find(
      (product) => product.id === id
    );
    const updatedProduct = {
      ...product,
      count,
    };
    updateProducts(id, updatedProduct).then(() => dispatch(getProductList()));
  };
};

export const sortProduct = (key) => {
  return {
    type: SORT_PRODUCT,
    payload: {
      key,
    },
  };
};
