import React, { useEffect, useState } from 'react'

const Right = ({iteam}) => {

  const [price,setPrice] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[iteam])

  const totalAmount = ()=>{
    let price = 0;
    iteam.map((iteam)=>{
      price = iteam.price.cost + price
    });
    setPrice(price)
  }

  return (<div className='right_buy'>
    <img src='/Rs_Right.png' alt='' />
    <div className='cost_right'>
        <p>Your order is eligible for FREE Delivery.</p>
        <span style={{ color: "#565959" }}> Select this option at checkout. Details</span>
        <h3>Subtotal ({iteam.length}items) : <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
        <button className="rightbuy_btn">Proceed to Buy</button>
        <div className='emi'>
            Emi Not Available
        </div>
    </div>
  </div>
  )
}

export default Right