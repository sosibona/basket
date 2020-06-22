import React, { useState } from "react";
import "./Header.scss";
import { connect } from "react-redux";
import { addProduct } from "../../products/products.actions";
import PropTypes from "prop-types";

const Header = ({ addProduct }) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState({ priceOne: "", error: false });
  const [count, setCount] = useState({ number: "", error: false });

  const handleProduct = (event) => {
    setProduct(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice({
      ...price,
      priceOne: event.target.value,
    });
  };

  const handleCount = (event) => {
    setCount({
      ...count,
      number: event.target.value,
    });
  };

  const addNewProduct = (product, count, price) => {
    if (
      +count.number <= 0 ||
      !isFinite(Number(+count.number)) ||
      +count.number % 1 !== 0
    ) {
      setCount({
        ...count,
        error: true,
      });
      return;
    } else {
      setCount({
        ...count,
        error: false,
      });
    }

    if (+price.priceOne <= 0 || !isFinite(Number(+price.priceOne))) {
      setPrice({
        ...price,
        error: true,
      });
      return;
    } else {
      setPrice({
        ...price,
        error: false,
      });
    }
    setProduct("");
    setCount({ number: "", error: false });
    setPrice({ priceOne: "", error: false });
    const newProduct = {
      id: Math.ceil(Math.random() * 100000).toString(),
      name: product,
      count: count.number,
      pricePerOne: +price.priceOne,
    };
    addProduct(newProduct);
  };

  return (
    <header className="header">
      <div className="add-product">
        <input
          className="add-product__input-name input"
          placeholder="product"
          type="text"
          value={product}
          onChange={() => handleProduct(event)}
        />
        <input
          className={`add-product__input-count input ${
            count.error ? "error" : ""
          }`}
          type="text"
          name="count"
          value={count.number}
          placeholder="enter count"
          onChange={() => handleCount(event)}
        />
        <input
          className={`add-product__input-price input ${
            price.error ? "error" : ""
          }`}
          type="text"
          name="price"
          value={price.priceOne}
          placeholder="enter price"
          onChange={() => handlePrice(event)}
        />
        <button
          className="add-product__btn btn"
          onClick={() => addNewProduct(product, count, price)}
        >
          Add product
        </button>
      </div>
    </header>
  );
};

const mapDispatch = {
  addProduct: addProduct,
};

Header.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Header);
