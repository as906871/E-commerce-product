import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RatingReview from "./RatingReview";
import { LuFacebook } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSquarePinterest } from "react-icons/fa6";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const getRandomImageUrl = (title) => {
    const keywords = title.split(" ").join(",");
    const url = `https://picsum.photos/seed/${keywords}/100/100`;
    return url;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;
  const dynaPirce= (product.price * 140)/100

  return (
    <div class="card-wrapper">
      <div class="card">
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>
        <div class="product-content">
          <h2 class="product-title">{product.title}</h2>
          <div class="product-rating">
            <RatingReview rating={product.rating.rate} setRating={setRating} />
            <span>{product.rating.rate}</span>
          </div>

          <div class="product-price">
            <p class="last-price"> Old Price: <span>${dynaPirce}</span> </p>
            <p class="new-price"> New Price: <span>${product.price} (40%)</span> </p>
          </div>

          <div class="product-detail">
            <h2>about this item: </h2>
            <p> {product.description} </p>
            <ul>
              <li> Available: <span>in stock</span> </li>
              <li> Category: <span>{product.category}</span> </li>
              <li> Shipping Area: <span>All over the world</span> </li>
              <li> Shipping Fee: <span>Free</span> </li>
            </ul>
          </div>

          <div class="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" class="btn" onClick={() => addToCart(product)}>
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div class="social-links">
            <p>Share At: </p>
            <a href="#"> <i><LuFacebook /></i> </a>
            <a href="#"> <i> <FiYoutube /></i> </a>
            <a href="#"> <i><FaInstagram /></i> </a>
            <a href="#"> <i><FaWhatsapp /></i> </a>
            <a href="#"> <i><FaSquarePinterest /></i> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
