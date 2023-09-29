import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section newsletter">
        <h4>Sign up for our newsletter</h4>
        <p>
          Be the first to get notified about upcoming products, deals and
          giveaways.
        </p>
        <input type="email" placeholder="Email" />
      </div>

      <div className="footer__section support">
        <h4>SUPPORT</h4>
        <ul>
          <li>
            <a href="/returns">365-day returns</a>
          </li>
          <li>
            <a href="/track-order">Track your order</a>
          </li>
          <li>
            <a href="/shipping-policy">Shipping policy</a>
          </li>
          <li>
            <a href="/refund-policy">Refund policy</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
        </ul>
      </div>

      <div className="footer__section company">
        <h4>OUR COMPANY</h4>
        <ul>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/community">The Headphone Community</a>
          </li>
          <li>
            <a href="/help-child-hear">Buy Headphones, Help A Child Hear</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms Of Service</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/accessibility">Accessibility Statement</a>
          </li>
          <li>
            <a href="/buy-office-headsets">Buy Office Headsets</a>
          </li>
        </ul>
      </div>

      <div className="footer__section brands">
        <h4>TOP BRANDS</h4>
        <ul>
          <li>
            <a href="/brands/focal">Focal</a>
          </li>
          <li>
            <a href="/brands/sennheiser">Sennheiser</a>
          </li>
          <li>
            <a href="/brands/audeze">Audeze</a>
          </li>
          <li>
            <a href="/brands/64-audio">64 Audio</a>
          </li>
          <li>
            <a href="/brands/hifiman">Hifiman</a>
          </li>
          <li>
            <a href="/brands/meze-audio">Meze Audio</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
