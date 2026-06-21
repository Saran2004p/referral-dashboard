import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Support() {
  return (
    <>
      <Navbar />

      <div className="support-page">
        <div className="support-header">
          <h1>Support Center</h1>

          <p>
            Need help with referrals, commissions, dashboard access, or partner
            management?
          </p>
        </div>

        <div className="support-cards">
          <div className="support-card">
            <h3>Email Support</h3>

            <p>support@gobusiness.com</p>
          </div>

          <div className="support-card">
            <h3>Help Center</h3>

            <p>Browse documentation and FAQs.</p>
          </div>

          <div className="support-card">
            <h3>Live Chat</h3>

            <p>Available 24/7 for partners.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
