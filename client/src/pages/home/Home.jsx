import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">   
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item_left">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <div className="title-top">
                <i className="fa-regular fa-circle-check"></i>
                <span className="title-check">Stick to your budget</span>
              </div>
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="title">
              <div className="title-top">
                <i className="fa-regular fa-circle-check"></i>
                <span className="title-check">
                  Get quality work done quickly
                </span>
              </div>
              <p>
                Hand your project over to a talented freelancer in minutes, get
                long-lasting results.
              </p>
            </div>
            <div className="title">
              <div className="title-top">
                <i className="fa-regular fa-circle-check"></i>
                <span className="title-check">Pay when you're happy</span>
              </div>
              <p>
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
            </div>
            <div className="title">
              <div className="title-top">
                <i className="fa-regular fa-circle-check"></i>
                <span className="title-check">Count on 24/7 support</span>
              </div>
              <p>
                Our round-the-clock support team is available to help anytime,
                anywhere.
              </p>
            </div>
          </div>
          <div className="item_right">
            <iframe
              width="650"
              height="400"
              src="https://www.youtube.com/embed/8ofCZObsnOo?si=lu1hzWDipfB71Ew-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             
            ></iframe>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container dark">
          <div className="item_left">
            <h1>Advanced solutions and professional talent for businesses</h1>
            <div className="title">
              <div className="icon">
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <div className="title-right">
                <span className="title-check">Fiverr Pro</span>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="title">
              <span className="icon">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <span className="title-right">
                <span className="title-check">Fiverr Pro</span>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </span>
            </div>
            <div className="title">
              <span className="icon">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <span className="title-right">
                <span className="title-check">Fiverr Pro</span>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </span>
            </div>
            <button className="button-business">Learn More</button>
          </div>
          <div className="item_right">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
