import React from "react";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Basket />
    </Provider>
  );
}

export default App;
