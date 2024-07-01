import React from "react";
import style from "./Cart.module.css";
import empty from "../assest/empty.svg";
import { useNavigate } from "react-router";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <div className={style.cart_page} style={{marginTop:"30px"}}>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div class={style.empty_cart}>
          <img src={empty} alt="empty cart" style={{ height: "200px" }} />
          <h4 onClick={()=> navigate(-1)}>Return to Product page</h4>
          </div>
      ) : (
        <div className={style.cart_items}>
          {cartItems.map((item) => (
            <div key={item.id} className={style.cart_item}>
              <img
                src={item.image}
                alt={item.title}
                className={style.cart_item_image}
              />
              <div className={style.cart_item_details}>
                <h2>{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
                <div className={style.quantity_control}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item, e.target.value)}
                  />
                </div>
              </div>
              <div className={style.button_section}>
                <button
                  className={style.remove_btn}
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
