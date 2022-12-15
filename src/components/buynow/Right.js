import React from 'react'

const Right = () => {
  return (<div className='right_buy'>
    <img src='/Rs_Right.png' alt='' />
    <div className='cost_right'>
        <p>Your order is eligible for FREE Delivery.</p>
        <span style={{ color: "#565959" }}> Select this option at checkout. Details</span>
        <h3>Subtotal (1 Item) : <span style={{ fontWeight: "700" }}> ₹1195.00</span></h3>
        <button className="rightbuy_btn">Proceed to Buy</button>
        <div className='emi'>
            Emi Not Available
        </div>
    </div>
  </div>
  )
}

export default Right