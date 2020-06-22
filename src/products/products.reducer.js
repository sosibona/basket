import {
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "./products.actions";

const initialState = {
  basket: [
    { id: "1", name: "toy car", count: "1", pricePerOne: 200 },
    { id: "2", name: "mobile phone", count: "1", pricePerOne: 220 },
    { id: "3", name: "pencil", count: "1", pricePerOne: 20 },
    { id: "4", name: "laptop Acer", count: "1", pricePerOne: 1220 },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT: {
      const updateProducts = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        basket: updateProducts,
      };
    }
    case ADD_PRODUCT: {
      const newProduct = action.payload.data;
      console.log(newProduct);
      const updateProducts = state.basket.concat(newProduct);
      return {
        ...state,
        basket: updateProducts,
      };
    }
    case UPDATE_PRODUCT: {
      const { id, count } = action.payload;
      console.log(id);
      console.log(count);
      const updateProducts = state.basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count,
          };
        }
        return product;
      });
      return {
        ...state,
        basket: updateProducts,
      };
    }
    default:
      return state;
  }
};
