import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="col-lg-3">
      <div className="card">
        <img
          src={product.images[0].url}
          className="card-img-top"
          alt="SanDisk Ultra"
        ></img>
        <div className="card-body">
          <Link to={`/product/${product._id}`} className="card-title">
            {product.name}
          </Link>
          <div className="card-rating">
            <span className="stars">{((product.ratings / 5) * 100) / 20}★</span>
            <span className="reviews">({product.numofReviews} reviews`)</span>
          </div>
          <p className="card-price">${product.price}</p>
          <Link to={`/product/${product._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
