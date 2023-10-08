import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image from "./calendar.png";
import image2 from "./call.png";
import image3 from "./wallet.png";
import speaker1 from "./speaker1.png";
import speaker2 from "./speaker2.png";
import speaker3 from "./speaker3.png";
import speaker4 from "./speaker4.png";
import speaker5 from "./speaker5.png";
import airpurifier from "./airpurifier.png"

function Home() {

  return (
    <div>
      <div className="big-air-container">
        <section className="air-purifier">
          <div className="image-container">
            <img
              src={airpurifier}
              alt="purifier-headphones"
            />
          </div>
          <div className="air-purifier-text">
            <h3>RadShak</h3>
            <h2 className="text-focus-in">Air-Purifying Headphones</h2>
            <p>
              Trying to tune out of reality while on the subway? Can't shake the
              anxiety of COVID-19 off to enjoy it?? Here at RadShak, we have the
              answer for you! Check out the brand new Kn-95 Turbo
            </p>
            <br />
            <Link to="/headphones">
              <button className="button">Pre-Order Now</button>
            </Link>
          </div>
        </section>
      </div>
      <section className="quote">
        <h1>
          Discover Sound Excellence:{" "}
          <Link to="/speakers" className="quote-link">
            Speakers
          </Link>
          ,{" "}
          <Link to="/headphones" className="quote-link">
            Headphones
          </Link>
          , and{" "}
          <Link to="/earbuds" className="quote-link">
            Earbuds
          </Link>{" "}
          for Every Beat.
        </h1>
      </section>
      <section className="scroll-box">
        <div className="scroll-child">
          <img src={image2} alt="phone-icon" />
          <h3>Want an expert opinion?</h3>
          <Link>
            <button>Chat with our tech dept</button>
          </Link>
        </div>
        <div className="scroll-child">
          <img src={image3} alt="phone-icon" />
          <h3>Have a budget in mind?</h3>
          <Link>
            <button>Chat with our finance dept</button>
          </Link>
        </div>
        <div className="scroll-child">
          <img src={image} alt="phone-icon" />
          <h3>Want to schedule a call?</h3>
          <Link>
            <button>Click here</button>
          </Link>
        </div>
      </section>
      <div className="big-sound-container">
        <section className="sound-focus">
          <div>
            <img
              src="https://us.soundcore.com/cdn/shop/articles/20220818-210015_2ddbe14d-e2c9-4a79-8d34-1046bd45479b_1040x.jpg?v=1663815360"
              alt="purifier-headphones"
            />
          </div>
          <div className="sound-focus-text">
            <h3>RadShak</h3>
            <h2>Sound Focus</h2>
            <p>
              Introducing our newest Sound Focus noise cancelling technology for
              our earbuds. Say goodbye to distractions and hello to crystal
              clear sound. Immerse yourself in your music with unmatched
              precision and comfort and come see why this is the new standard
              for audio experience. It's time to hear the world differently.
            </p>
            <br />
            <Link to="/earbuds">
              <button className="sound-button">Order Now</button>
            </Link>
          </div>
        </section>
      </div>
      {/* <section className="earbuds">
        <h2>Sound Focus</h2>
        <img
          src="https://us.soundcore.com/cdn/shop/articles/20220818-210015_2ddbe14d-e2c9-4a79-8d34-1046bd45479b_1040x.jpg?v=1663815360"
          alt="earbuds-lady"
        />
        <h3>
          Introducing our newest Sound Focus noise cancelling technology for our
          earbuds. Say goodbye to distractions and hello to crystal clear sound.
          Immerse yourself in your music with unmatched precision and comfort
          and come see why this is the new standard for audio experience. It's
          time to hear the world differently.
        </h3>
        <Link to="/earbuds">
          <button>Buy Now!</button>
        </Link>
      </section>  */}
      <section className="speaker-box">
        <div className="speaker-child">
          <img src={speaker1} alt="speaker-1" />
          <h3>$1,999.99</h3>
        </div>
        <div className="speaker-child">
          <img src={speaker2} alt="" />
          <h3>$2,399.99</h3>
        </div>
        <div className="speaker-child">
          <img src={speaker3} alt="" />
          <h3>$999.99</h3>
        </div>
        <div className="speaker-child">
          <img src={speaker4} alt="" />
          <h3>$3,499.99</h3>
        </div>
        <div className="speaker-child">
          <img src={speaker5} alt="" />
          <h3>$7.99</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
