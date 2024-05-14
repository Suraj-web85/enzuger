import React from "react";
import "./Order.css";
import OrderMap from "./OrderMap";
import { BrowserRouter as Router } from "react-router-dom";

export default function Order() {
  return (
    
      <div className="mn-cn-ord-nw">
        <div className="or-hd">
          <h2>ORDER NOW</h2>
        </div>
        <div className="mn-pr-cr">
          <OrderMap />
        </div>
      </div>
  
  );
}
