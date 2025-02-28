import React, { useState } from "react";
import useStore from "../../store/store";

import TruncateText from "../TruncateText/TruncateText";

const Cart = () => {
  let { productsAddedInTheCart } = useStore();

  console.log("I am from cart.jsx...", productsAddedInTheCart)
  return (
    <div className="row g-4">
      {productsAddedInTheCart.length > 0 &&
        productsAddedInTheCart.map((item) => (
          <div className="card col-lg-3 mx-4" key={item.id * 2}>
            <img
              src={item.imageUrl}
              className="card-img-top"
              alt="..."
              width="50px"
              height="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <div className="card-text">
                <TruncateText description={item.description} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
