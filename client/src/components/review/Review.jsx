import React from "react";
import "./Review.scss";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const defaultImage = 'https://i.pinimg.com/736x/63/53/d9/6353d9fff14cc31af369dd0254fd8c97.jpg'
  const { isLoading, error, data } = useQuery(
    "reviewUser",
    () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
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
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="user">
          <img
            className="pp"
            src={data.img || defaultImage}
          />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country || "Unknown"}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <i className="fa-regular fa-thumbs-up"></i>
        <span>Yes</span>
        <i className="fa-regular fa-thumbs-down"></i>
        <span>No?</span>
      </div>
    </div>
  );
};

export default Review;
