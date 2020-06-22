import { createSelector } from "reselect";

export const productsSelector = (state) => {
  return state.basket;
};

export const sortSelector = (state) => {
  return state.sortBy;
};

export const sorted2Selector = createSelector(
  [productsSelector, sortSelector],
  (allProducts, sort) => {
    const { key, direction } = sort;

    if (!key && !direction) return allProducts;

    const sortedProducts = allProducts.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortedProducts;
  }
);
