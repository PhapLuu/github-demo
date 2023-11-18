import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
    const defaultImage = 'https://i.pinimg.com/736x/63/53/d9/6353d9fff14cc31af369dd0254fd8c97.jpg'
  const { isLoading, error, data } = useQuery(
    `${item.userId}`,
    () =>
      newRequest
        .get(
          `/users/${item.userId}`
        )
        .then((res) => {
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
    <Link className="link" to={`/gig/${item._id}`}>
      <div className="gigCard">
        <img src={item.cover} />
        <div className="info">
          {
            isLoading ? (
            "loading") 
            : error ? (
            "Something went wrong") :
          (<div className="user">
            <img src={data.img || defaultImage} />
            <span>{data.username}</span>
          </div>)}
          <p> {item.title} </p>
          <div className="star">
            <i className="fa-solid fa-star"></i>
            <span>{Number((item.totalStars / item.starNumber) || "").toFixed(1)}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <i className="fa-regular fa-heart"></i>
          <div className="price">
            <span>Starting At</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
