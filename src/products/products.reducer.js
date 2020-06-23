import { SORT_PRODUCT, PRODUCT_LIST_RECIEVED } from "./products.actions";

const initialState = {
  basket: [],
  sortBy: { key: "", direction: "" },
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_RECIEVED: {
      return {
        ...state,
        basket: action.payload.productList,
      };
    }
    case SORT_PRODUCT: {
      const { key } = action.payload;
      let direction = "ascending";
      if (state.sortBy.key === key && state.sortBy.direction === "ascending") {
        direction = "descending";
      }
      const sortedList = {
        direction,
        key,
      };
      return {
        ...state,
        sortBy: sortedList,
      };
    }
    default:
      return state;
  }
};
