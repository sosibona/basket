import React from "react";
import Product from "../Product/Product";
import Total from "../Total/Total";
import "./BasketList.scss";
import { connect } from "react-redux";
import { sorted2Selector } from "../../products/products.selectors";
import { sortProduct } from "../../products/products.actions";
import PropTypes from "prop-types";

const BasketList = ({ products, sortProducts }) => {
  const productsList = products.map((item) => {
    return <Product key={item.id} {...item} />;
  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th
              className="table-header__name"
              onClick={() => sortProducts("name")}
            >
              Name of product
            </th>
            <th
              className="table-header__count"
              onClick={() => sortProducts("count")}
            >
              Count &uarr;&darr;
            </th>
            <th
              className="table-header__price"
              onClick={() => sortProducts("pricePerOne")}
            >
              Price per one item &uarr;&darr;
            </th>
          </tr>
        </thead>
        <tbody>
          {productsList.length ? productsList : "No products"}
          {productsList.length ? <Total /> : ""}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    products: sorted2Selector(state),
  };
};

const mapDispatch = {
  sortProducts: sortProduct,
};

BasketList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortProducts: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(BasketList);
