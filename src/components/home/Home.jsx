import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image from "./calendar.png";
import image2 from "./call.png";
import image3 from "./wallet.png";

function Home() {
  return (
    <div>
      <section className="air-purifier">
        <img
          src="https://www.cnet.com/a/img/resize/4cbf8b7c6cbf21db9d2fa1f39f47e114d6c46cbe/hub/2022/03/29/4488932c-f341-4180-a1ee-894b837e7326/dyson-zone-promo.jpg?auto=webp&fit=crop&height=1200&width=1200"
          alt="purifier-headphones"
        />
        <div className="air-purifier-text">
          <h2 className="text-focus-in">Air-Purifying Headphones</h2>
          <p>
            Trying to tune out of reality while on the subway? Can't shake the
            anxiety of COVID-19 off to enjoy it?? Here at Radioshacc, we have
            the answer for you! Check out the brand new Kn-95 Turbo
          </p>
          <br />
          <Link to="/headphones">
            <button className="">Buy Now!</button>
          </Link>
        </div>
      </section>
      <section className="quote">
        <h1>"The best collection of speakers around" - Donkey Kong</h1>
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
      <section className="speakers">
        <h2>
          Take a look in our shop and find one of the most exciting assortments
          of speaker technology around.
        </h2>
        <img
          src="https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw7f9fec3d/images/marshall/speakers/stanmore-ii-bt/black/large/pos-marshall-stanmore-ii-bt-black-01.png"
          alt="many-speakers"
        />
        <Link to="/speakers">
          <button className="speakers-button">Purchase</button>
        </Link>
      </section>
      <section className="earbuds">
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
      </section>
    </div>
  );
}

export default Home;
