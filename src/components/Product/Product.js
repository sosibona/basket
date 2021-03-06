import React from "react";
import "./Product.scss";
import { isPositiveInteger } from "../../isPositiveInteger";
import { connect } from "react-redux";
import { updateProduct, deletedProduct } from "../../products/products.actions";
import PropTypes from "prop-types";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      isValidCount: true,
    };
  }

  handleCountProduct(event, id) {
    const number = event.target.value;
    const isValid = !isPositiveInteger(number);
    this.setState({
      ...this.state,
      isValidCount: !isValid,
    });

    this.setState(
      {
        count: +number,
      },
      () => {
        if (!isValid) {
          this.props.updateProduct(id, this.state.count);
        }
      }
    );
  }
  render() {
    const { name, id, pricePerOne, deleteProduct } = this.props;
    return (
      <tr>
        <td className="product-name">
          <div className="product-name__detail">
            {name}
            <button
              className="product-delete"
              onClick={() => deleteProduct(id)}
            >
              delete
            </button>
          </div>
        </td>
        <td className="product-count">
          <input
            className={`product-count__input ${
              this.state.isValidCount ? "" : "error"
            }`}
            type="number"
            name="count"
            value={this.state.count}
            onChange={(event) => this.handleCountProduct(event, id)}
          />
        </td>
        <td className="product-price">${pricePerOne.toFixed(2)}</td>
      </tr>
    );
  }
}

const mapDispatch = {
  deleteProduct: deletedProduct,
  updateProduct: updateProduct,
};

Product.propTypes = {
  count: PropTypes.number.isRequired,
  updateProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pricePerOne: PropTypes.number.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Product);
