import React from "react";
import "../App.css";
import products from "../assets/data/products";

const ProductItem = ({ product }) => {
  return (
    <div className="book2">
      <img src={product.image} alt="rD" className="rD-imge" />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductItem;
