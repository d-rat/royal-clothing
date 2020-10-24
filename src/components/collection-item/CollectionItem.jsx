import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/CartActions";

function CollectionItem({ item, addItem }) {
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItem(item);
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
