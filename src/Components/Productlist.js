import React from "react";
import products from "../assets/data/products";
import ProductItem from "./ProductItem";
import "../assets/css/main.css";

const Productlist = () => {
  const productsList = products.map((productObject) => {
    return <ProductItem product={productObject} />;
  });
  return <div className="newApp">{productsList}</div>;
};

export default Productlist;
