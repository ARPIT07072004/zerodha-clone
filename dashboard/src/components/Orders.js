import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// ✅ CSS file we'll define below

const Orders = () => {
  const [orderdata, setOrderdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getOrders")
      .then((res) => {
        setOrderdata(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orderdata.length === 0 ? (
        <p className="no-orders">You haven't placed any orders today</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orderdata.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td className={order.mode === "Buy" ? "buy" : "sell"}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/" className="btn-back">
        ⬅ Get started
      </Link>
    </div>
  );
};

export default Orders;
