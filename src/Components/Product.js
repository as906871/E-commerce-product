import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingReview from "./RatingReview";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product, addToCart }) => {
  const [rating, setRating] = useState(product.rating.rate);
  const navigate = useNavigate();
  const text = product.price * 1.75;

  return (
    <div class="product-card">
      <div class="badge">Hot</div>
      <Link to={`/product/${product.id}`}>
        <div class="product-tumb">
          <img src={product.image} alt={product.title} />
        </div>
      </Link>
      <div class="product-details">
        <span class="product-catagory">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h4>
            {product.title.length > 40
              ? `${product.title.slice(0, 40)}...`
              : product.title}
          </h4>
        </Link>
        <RatingReview rating={rating} setRating={setRating} />
        <div class="product-bottom-details">
          <div class="product-price">
            <small>${text}</small>${product.price}
          </div>
          <div class="product-links">
            <a href="#">
              <i onClick={() => addToCart(product)}>
                <AiOutlineShoppingCart />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
