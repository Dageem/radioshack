import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../reducers/auth";
import { useSelector } from "react-redux";
import "./navbar.css"

function Nav() {
  const [logout] = useLogoutMutation();
  const user = useSelector((state) => state.auth.credentials.user) || "";

  return (
    <nav>
      <div className="navbar">
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/headphones"}>HeadPhones</Link>
          <Link to={"/earbuds"}>EarBuds</Link>
          <Link to={"/speakers"}>Speaker</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
        {user.userId && <Link to={"/User"}>Profile</Link>}
        {user.userId && <button onClick={logout}>Logout</button>}
      </div>
      {user.userId && <h1>Welcome {user.username}</h1>}
    </nav>
  );
}
export default Nav;
