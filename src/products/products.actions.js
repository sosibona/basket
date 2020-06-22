export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      data,
    },
  };
};

export const updateProduct = (id, count) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id,
      count,
    },
  };
};
