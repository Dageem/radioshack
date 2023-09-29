import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../reducers/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="hi">
      <section className="air-purifier">
        <img
          src="https://www.cnet.com/a/img/resize/4cbf8b7c6cbf21db9d2fa1f39f47e114d6c46cbe/hub/2022/03/29/4488932c-f341-4180-a1ee-894b837e7326/dyson-zone-promo.jpg?auto=webp&fit=crop&height=1200&width=1200"
          alt="purifier-headphones"/>
        <div className="air-purifier-text">
        <h2 className="text-focus-in">Air-Purifying Headphones</h2>
        <p>
          Trying to tune out of reality while on the subway? Can't shake the
          anxiety of COVID-19 off to enjoy it?? Here at Radioshacc, we have the
          answer for you! Check out the brand new Kn-95 Turbo
        </p>
        <br />
        <Link to="/headphones">
          <button className="">Buy Now!</button>
        </Link>
        </div>
      </section>
      <section className="speakers">
        <h2>
          Take a look in our shop and find one of the most exciting assortments
          of speaker technology around.
        </h2>
        <img
          src="https://www.audiosciencereview.com/forum/index.php?attachments/professioal-speakers-jpg.295800/"
          alt="many-speakers"
        />
        <Link to="/speakers">
          <button>Buy Now!</button>
        </Link>
      </section>
      <section className="links">
        <Link to={"/headphones"}></Link>
        <Link to={"/earbuds"}></Link>
        <Link to={"/speakers"}></Link>
      </section>
      <section className="sound-proof">
        <h2>Sound Focus</h2>
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-18-at-4.18.50-PM.png?w=922"
          alt="booth-headphones"
        />
        <h3>
          Introducing our newst Sound Focus noise canelling technology. Say
          goodbye to distractions and hello to crystal clear sound. Immerse
          yourself in your music with unmatched precision and comfort and come
          see why this is the new standard for audio experience. It's time to
          hear the world differently.{" "}
        </h3>
        <Link to="/headphones">
          <button>Buy Now!</button>
        </Link>
      </section>
      <section className="random-clout">
        <h3>We are FDIC insured</h3>
        <img
          src="data:image/png;base64,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"
          alt="five-stars"
        />
      </section>
    </div>
  );
}

export default Home;
