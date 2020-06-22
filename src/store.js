import { createStore } from "redux";
import { productsReducer } from "./products/products.reducer";

const store = createStore(productsReducer);

export default store;
