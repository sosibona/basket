import React, { useState, useMemo } from "react";
import Product from "./Product";
import Total from "./Total";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { productsSelector } from "../products/products.selectors";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    console.log(sortConfig);
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const BasketList = ({ products }) => {
  const { items, requestSort } = useSortableData(products);
  const productsList = items.map((item) => {
    return <Product key={item.id} {...item} />;
  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th
              className="table-header__name"
              onClick={() => requestSort("name")}
            >
              Name of product
            </th>
            <th
              className="table-header__count"
              onClick={() => requestSort("count")}
            >
              Count &uarr;&darr;
            </th>
            <th
              className="table-header__price"
              onClick={() => requestSort("pricePerOne")}
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
    products: productsSelector(state),
  };
};

BasketList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState)(BasketList);
