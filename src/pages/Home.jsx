import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const token = Cookies.get("jwt_token");

  return (
    <>
      <Navbar />

      <div className="landing-page">
        <section className="hero-section">
          <span className="hero-badge">
            Trusted Referral Management Platform
          </span>

          <h1>Grow Your Business Through Powerful Referral Programs</h1>

          <p>
            Track referrals, monitor partner performance, manage commissions and
            scale revenue with a modern referral ecosystem.
          </p>

          <div className="hero-actions">
            {!token ? (
              <Link to="/login" className="primary-btn">
                Get Started
              </Link>
            ) : (
              <Link to="/dashboard" className="primary-btn">
                Open Dashboard
              </Link>
            )}

            <button
              className="secondary-btn"
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Learn More
            </button>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h2>10K+</h2>
            <p>Successful Referrals</p>
          </div>

          <div className="stat-card">
            <h2>$2M+</h2>
            <p>Tracked Earnings</p>
          </div>

          <div className="stat-card">
            <h2>500+</h2>
            <p>Business Partners</p>
          </div>

          <div className="stat-card">
            <h2>99%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Why Businesses Choose Go Business</h2>

          <p className="feature-subtitle">
            Everything you need to build, track and scale referral programs.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Referral Tracking</h3>

              <p>Monitor referrals in real time with advanced analytics.</p>
            </div>

            <div className="feature-card">
              <h3>Commission Management</h3>

              <p>Track payouts and partner earnings effortlessly.</p>
            </div>

            <div className="feature-card">
              <h3>Partner Growth</h3>

              <p>Build stronger referral relationships.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Grow Your Business?</h2>

          <p>Start building referral programs that generate revenue.</p>

          <Link to="/dashboard" className="cta-btn">
            Open Dashboard
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
