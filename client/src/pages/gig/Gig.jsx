import React from "react";
import "./Gig.scss";
import Slider from "infinite-react-carousel";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews.jsx";

const Gig = () => {
  const { id } = useParams();
  const defaultImage = 'https://i.pinimg.com/736x/63/53/d9/6353d9fff14cc31af369dd0254fd8c97.jpg'
  const { isLoading, error, data } = useQuery(
    `${id}`,
    () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  const userId = data?.userId;
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(
    `user`,
    () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
      {
        enabled: !!userId,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,}
  );

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <div className="breadcrumbs">
              <span className="home">
                <Link className="link" to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </span>
              <span className="line">/</span>
              <span className="router">GRAPHICS & DESIGN</span>
            </div>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "error"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || defaultImage}
                />
                <span>{dataUser.username}</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>
                  {Number(data.totalStars / data.starNumber || "").toFixed(1)}
                </span>
              </div>
            )}
            <Slider className="slider" slidesToShow={1} dots>
              {data.images.map((img) => (
                <img key={img} src={img} />
              ))}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "error"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img
                    className="pp"
                    src={dataUser.img || defaultImage}
                  />
                  <div className="info">
                    <span className="name">{dataUser.username}</span>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <span>
                        {Number(
                          data.totalStars / data.starNumber || ""
                        ).toFixed(1)}
                      </span>
                    </div>
                    <button>Contact me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country || "Unknown"}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time delivery</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Language</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    {dataUser.desc || "I'm a seller"}
                  </p>
                </div>
              </div>
            )}
            <Reviews gigId={id}></Reviews>
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortDesc}</h3>
              <h2>$ {data.price}</h2>
            </div>

            <p>
              Carry promised own produce table made state interest rate
              announced sudden leaving breeze himself planned size year judge
              wagon cost am bring game cast
            </p>
            <div className="details">
              <div className="item">
                <i className="fa-regular fa-clock"></i>
                <span>{data.deliveryTime} days Delivery</span>
              </div>
              <div className="item">
                <i className="fa-solid fa-recycle"></i>
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            {data.features.map((feature) => (
              <div className="features" key={feature}>
                <div className="item">
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </div>
              </div>
            ))}

            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
