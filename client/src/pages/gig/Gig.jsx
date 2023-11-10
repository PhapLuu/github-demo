import React from "react";
import "./Gig.scss";
import Slider from "infinite-react-carousel";
import {Link} from 'react-router-dom';

const Gig = () => {
  return (
    <div className="gig">
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
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://i.pinimg.com/736x/7d/ee/23/7dee23189c0b67296c627ca65edbe9ca.jpg"
            />
            <span>John Doe</span>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
            </div>
              <span>5</span>
          </div>
          <Slider className="slider" slidesToShow={1} dots>
            <img src="https://i.pinimg.com/736x/08/c8/97/08c897bc902145ca63940e581042c8b1.jpg" />
            <img src="https://i.pinimg.com/564x/ad/62/79/ad6279db0443e1c78825cddf58a7a65f.jpg" />
            <img src="https://i.pinimg.com/736x/80/2a/8d/802a8d4564906596dd79cba114cd6d5f.jpg" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Watch numeral many search material castle engineer frequently
            capital voyage how difficulty fire son doing over unknown carbon
            wave increase meant flight cloth spite lower bush pair behavior
            drink visitor hollow friend exact smile create wore member name
            canal silly who buried ever history imagine locate pretty beat eaten
            powder because occur map newspaper actual feel selection situation
            everybody top brought captured citizen slip kept dawn winter were
            organized chicken television three harbor office public twelve dozen
            hurried automobile stranger lovely southern important busy safety
            seed tip table at lie look sugar tell short egg ability
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                className="pp"
                src="https://i.pinimg.com/736x/7d/ee/23/7dee23189c0b67296c627ca65edbe9ca.jpg"
              />
              <div className="info">
                <span className="name">John Doe</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
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
                Ten fell share floor boat new explore your average air again
                after back neighbor indeed adult there partly health grew sense
                anybody bone queen solution finger whispered community somebody
                cup worth machine frame this plate load kill act open melted mix
                power promised realize pencil respect rush queen
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.pinimg.com/564x/66/f2/97/66f29779c4cd961e9100d555a0a89b34.jpg"
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <i className="fa-solid fa-flag-usa"></i>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>

                <span>5</span>
              </div>
              <p>
                Successful supper judge rise shirt see ranch speak leather pupil
                weight fellow center balloon cry recently flag bottom somehow
                gentle strong dust ask thus street given past sit alone nation
                silk mathematics fireplace such screen arrow hope till scale
                deeply whenever travel reader image call of laid but dog got
                although though while single football recent ear national rush
                motor me natural city camp yellow report broken conversation
                compass weather fear corn
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Yes</span>
                <i class="fa-regular fa-thumbs-down"></i>
                <span>No?</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.pinimg.com/564x/66/f2/97/66f29779c4cd961e9100d555a0a89b34.jpg"
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <i className="fa-solid fa-flag-usa"></i>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>

                <span>5</span>
              </div>
              <p>
                Successful supper judge rise shirt see ranch speak leather pupil
                weight fellow center balloon cry recently flag bottom somehow
                gentle strong dust ask thus street given past sit alone nation
                silk mathematics fireplace such screen arrow hope till scale
                deeply whenever travel reader image call of laid but dog got
                although though while single football recent ear national rush
                motor me natural city camp yellow report broken conversation
                compass weather fear corn
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Yes</span>
                <i class="fa-regular fa-thumbs-down"></i>
                <span>No?</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.pinimg.com/564x/66/f2/97/66f29779c4cd961e9100d555a0a89b34.jpg"
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <i className="fa-solid fa-flag-usa"></i>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <span>5</span>
              </div>
              <p>
                Successful supper judge rise shirt see ranch speak leather pupil
                weight fellow center balloon cry recently flag bottom somehow
                gentle strong dust ask thus street given past sit alone nation
                silk mathematics fireplace such screen arrow hope till scale
                deeply whenever travel reader image call of laid but dog got
                although though while single football recent ear national rush
                motor me natural city camp yellow report broken conversation
                compass weather fear corn
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Yes</span>
                <i class="fa-regular fa-thumbs-down"></i>
                <span>No?</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>

          <p>
            Carry promised own produce table made state interest rate announced
            sudden leaving breeze himself planned size year judge wagon cost am
            bring game cast
          </p>
          <div className="details">
            <div className="item">
              <i class="fa-regular fa-clock"></i>
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-recycle"></i>
              <span>3 Revisions</span>
            </div>
          </div>

          <div className="features">
            <div className="item">
              <i class="fa-solid fa-check"></i>
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <i class="fa-solid fa-check"></i>
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <i class="fa-solid fa-check"></i>
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <i class="fa-solid fa-check"></i>
              <span>Additional design </span>
            </div>
          </div>

          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
