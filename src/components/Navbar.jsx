import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = Cookies.get("jwt_token");

  const logout = () => {
    Cookies.remove("jwt_token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Go Business
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {token && <Link to="/dashboard">Dashboard</Link>}

        <Link to="/support">Support</Link>

        {!token ? (
          <Link className="login-btn" to="/login">
            Login
          </Link>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
