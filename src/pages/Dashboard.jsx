import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import ServiceSummary from "../components/ServiceSummary";
import ShareReferral from "../components/ShareReferral";
import ReferralsTable from "../components/ReferralsTable";
import Footer from "../components/Footer";

import { getReferrals } from "../services/api";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [dashboardData, setDashboardData] = useState({
    metrics: [],
    serviceSummary: {},
    referral: {},
  });

  const scrollToReferral = () => {
    document.getElementById("share-referral")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getReferrals();

        const data = response.data || {};

        setDashboardData({
          metrics: data.metrics || [],
          serviceSummary: data.serviceSummary || {},
          referral: data.referral || {},
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }

  return (
    <>
      <Navbar />

      <main className="dashboard-container">
        <div className="dashboard-hero">
          <div>
            <h1>Referral Dashboard</h1>

            <p>
              Track referrals, earnings, commissions and partner activity from
              one place.
            </p>
          </div>

          <button className="invite-btn" onClick={scrollToReferral}>
            Invite Partner
          </button>
        </div>

        <Overview metrics={dashboardData.metrics} />

        <ServiceSummary serviceSummary={dashboardData.serviceSummary} />

        <ShareReferral referral={dashboardData.referral} />

        <ReferralsTable />
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
