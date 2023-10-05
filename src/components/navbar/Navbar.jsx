import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../reducers/auth";
import { useSelector } from "react-redux";
import "./navbar.css";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";

function Nav() {
  const [logout] = useLogoutMutation();
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        RadShak
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to={"/headphones"}>HeadPhones</Link>
        </li>
        <li>
          <Link to={"/earbuds"}>EarBuds</Link>
        </li>
        <li>
          <Link to={"/speakers"}>Speaker</Link>
        </li>
        <li>
          <Link to={"/"}>
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <FiShoppingCart />
          </Link>
        </li>
        <li>
          {user.userId && (
            <Link to={"/User"}>
              <CgProfile />
            </Link>
          )}
        </li>
        <li>{user.userId && <Link to={"/admin"}>Admin</Link>}</li>
        {!user.userId && (
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        )}
        {user.userId && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Nav;
