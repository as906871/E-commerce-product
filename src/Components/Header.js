import React from "react";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <nav>
        <Link to="/" style={{ color: "white", float: "left", marginLeft: "20px" }}>
          <h5 className={style.textDesign} data-text="Akshay...">
            Akshay...
          </h5>
        </Link>
        <Link to="/cart" style={{ color: "white", float: "Right" }}>
          Cart ({cartItemCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
