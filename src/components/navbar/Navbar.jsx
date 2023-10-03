import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../reducers/auth";
import { useSelector } from "react-redux";
import "./navbar.css";
import React, { useState } from "react";

function Nav() {
  const [logout] = useLogoutMutation();
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Home
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
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>{user.userId && <Link to={"/User"}>Profile</Link>}</li>
        <li>{user.userId && <Link to={"/admin"}>Admin Panel</Link>}</li>
      </ul>

      {user.userId && <button onClick={logout}>Logout</button>}

      {user.userId && <h1>Welcome {user.email}</h1>}
    </nav>
  );
}
export default Nav;
