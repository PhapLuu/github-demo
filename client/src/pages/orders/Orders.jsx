import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery(
    "orders",
    () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyers" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img src={order.image} />
                </td>
                <td>{order.title}</td>
                <td>${order.price}</td>
                <td>{currentUser?.isSeller ? {buyerId} : {sellerId}}</td>
                <td>
                  <i className="fa-solid fa-envelope"></i>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
