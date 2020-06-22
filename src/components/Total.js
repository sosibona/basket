import React from "react";
import { connect } from "react-redux";
import { productsSelector } from "../products/products.selectors";
import PropTypes from "prop-types";

const Total = ({ products }) => {
  const total = products.reduce(
    (acc, product) => acc + +product.pricePerOne * +product.count,
    0
  );
  return (
    <tr>
      <td className="total">Total</td>
      <td className="total-price" colSpan="2">
        ${total}
      </td>
    </tr>
  );
};

const mapState = (state) => {
  return {
    products: productsSelector(state),
  };
};

Total.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState)(Total);
