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

// const initialState = {
//   basket: [
//     { id: "1", name: "toy car", count: 2, pricePerOne: 100 },
//     { id: "2", name: "mobile phone", count: 3, pricePerOne: 220 },
//     { id: "3", name: "pencil", count: 10, pricePerOne: 20 },
//     { id: "4", name: "laptop Acer", count: 1, pricePerOne: 1220 },
//   ],
//   sortBy: { key: "", direction: "" },
// };

// export const productsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_PRODUCT: {
//       const updateProducts = state.basket.filter(
//         (product) => product.id !== action.payload.id
//       );
//       return {
//         ...state,
//         basket: updateProducts,
//       };
//     }
//     case ADD_PRODUCT: {
//       const newProduct = action.payload.data;
//       const updateProducts = state.basket.concat(newProduct);
//       return {
//         ...state,
//         basket: updateProducts,
//       };
//     }
//     case UPDATE_PRODUCT: {
//       const { id, count } = action.payload;
//       const updateProducts = state.basket.map((product) => {
//         if (product.id === id) {
//           return {
//             ...product,
//             count,
//           };
//         }
//         return product;
//       });
//       return {
//         ...state,
//         basket: updateProducts,
//       };
//     }
//     case SORT_PRODUCT: {
//       const { key } = action.payload;
//       let direction = "ascending";
//       if (state.sortBy.key === key && state.sortBy.direction === "ascending") {
//         direction = "descending";
//       }
//       const sortedList = {
//         direction,
//         key,
//       };
//       return {
//         ...state,
//         sortBy: sortedList,
//       };
//     }
//     default:
//       return state;
//   }
// };
