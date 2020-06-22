import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct, updateProduct } from "../products/products.actions";

function isPositiveInteger(number) {
  return +number <= 0 || !isFinite(Number(+number)) || +number % 1 !== 0;
}

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
    const isValid = isPositiveInteger(number);
    this.setState({
      ...this.state,
      isValidCount: !isValid,
    });

    this.setState(
      {
        count: number,
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
            type="text"
            name="count"
            value={this.state.count}
            onChange={() => this.handleCountProduct(event, id)}
          />
        </td>
        <td className="product-price">${pricePerOne}</td>
      </tr>
    );
  }
}

const mapDispatch = {
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
};

Product.propTypes = {
  count: PropTypes.string.isRequired,
  updateProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pricePerOne: PropTypes.number.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Product);
