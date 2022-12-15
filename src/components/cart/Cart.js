import { Divider } from '@mui/material';
import React from "react";
import './cart.css';

const Cart = () => {
    return(
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="/Shoes.jpg" alt="cart_img" height="390px" />
                    <div className="cart_btn">
                        <button className="cart_btn1">Add to Cart</button>
                        <button className="cart_btn2">Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Men Shoes</h3>
                    <h4>Elegant Black Leather Shoes</h4>
                    <Divider />
                    <p className='mrp'>M.R.P. : ₹1195</p>
                    <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹625.00</span></p>
                    <p>You Save : <span style={{ color: "#B12704" }}>₹650(47%)</span></p>
                    <div className='discount_box'>
                        <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
                        <h4>Free Delivary <span style={{ color: "#111", fontWeight: "600" }}>Dec 8 - 31</span> Details</h4>
                        <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>In the early 1300s, Britain established the first means to measure shoe size. King Edward II declared barleycorn as the basis for shoe measurement. He ruled that the length of three barleycorns were equivalent to one inch, making this the standard for sizing.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart;