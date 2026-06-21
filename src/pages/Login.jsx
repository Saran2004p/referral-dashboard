import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginUser } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);

      Cookies.set("jwt_token", response.data.token);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h1>Go Business</h1>

      <p>Sign in to open your referral dashboard.</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
