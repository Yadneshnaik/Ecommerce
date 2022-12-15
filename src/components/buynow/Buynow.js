import React from "react";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import { Divider } from "@mui/material";
import Right from "./Right";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />

          <div className="item_containert">
            <img src="/Shoes.jpg" alt="" />
            <div className="item_details">
              <h3>Elegant Black Leather Shoes</h3>
              <h3>Men Shoes</h3>
              <h3 className="diffrentprice">₹1195</h3>
              <p className="unusuall">Usually dispattched in 8 days.</p>
              <p>Eligible for free Shopping</p>
              <img src="/Rs.png" alt="" />
              <Option />
            </div>
            <h3 className="item_price">₹1195.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;
