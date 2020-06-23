import React, { useEffect } from "react";
import Product from "../Product/Product";
import Total from "../Total/Total";
import "./BasketList.scss";
import { connect } from "react-redux";
import { sortedSelector } from "../../products/products.selectors";
import { sortProduct, getProductList } from "../../products/products.actions";
import PropTypes from "prop-types";

// class BasketList extends React.Component {
//   componentDidMount() {
//     this.props.getProductList();
//   }
//   render() {
//     const { sortProducts, products } = this.props;
//     const productsList = products.map((item) => {
//       return <Product key={item.id} {...item} />;
//     });
//     return (
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th
//                 className="table-header__name"
//                 onClick={() => sortProducts("name")}
//               >
//                 Name of product
//               </th>
//               <th
//                 className="table-header__count"
//                 onClick={() => sortProducts("count")}
//               >
//                 Count &uarr;&darr;
//               </th>
//               <th
//                 className="table-header__price"
//                 onClick={() => sortProducts("pricePerOne")}
//               >
//                 Price per one item &uarr;&darr;
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {productsList.length ? (
//               productsList
//             ) : (
//               <tr>
//                 <td colSpan="3">No products</td>
//               </tr>
//             )}
//             <Total />
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

const BasketList = ({ products, sortProducts, getProductList }) => {
  useEffect(() => {
    getProductList();
  }, []);
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
          {productsList.length ? (
            productsList
          ) : (
            <tr>
              <td colSpan="3">No products</td>
            </tr>
          )}
          <Total />
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    products: sortedSelector(state),
  };
};

const mapDispatch = {
  sortProducts: sortProduct,
  getProductList: getProductList,
};

BasketList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortProducts: PropTypes.func.isRequired,
  getProductList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(BasketList);
