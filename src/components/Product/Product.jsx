import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ toy }) => {
  const {
    image,
    name,
    price,
    title,
    weight,
    height,
    category,
    type,
    company,
    meterial,
    date,
    gender,
    model,
    stock,
    colors,
  } = toy;

  return (
    <div className="product text-center rounded-2xl">
      <img className="productimg" src={image} alt="" />
      <div className="details">
        <h2><Link to='/'>{name}</Link></h2>
        <h4>$ {price}</h4>
      </div>
    </div>
  );
};

export default Product;
