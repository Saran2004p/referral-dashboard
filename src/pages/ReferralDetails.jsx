import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import { getReferralById } from "../services/api";

const ReferralDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [referral, setReferral] = useState(null);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getReferralById(id);

        const data = response.data;

        if (!data) {
          setNotFound(true);
        } else {
          setReferral(data);
        }
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const formatDate = (date) => date.replaceAll("-", "/");

  const formatProfit = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (notFound) {
    return (
      <>
        <Navbar />

        <div className="not-found">
          <h1>Referral not found</h1>

          <Link to="/">Back to dashboard</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">
        <h1>Referral Details</h1>

        <h2>{referral.name}</h2>

        <dl>
          <dt>Referral ID</dt>

          <dd>{referral.id}</dd>

          <dt>Service Name</dt>

          <dd>{referral.serviceName}</dd>

          <dt>Date</dt>

          <dd>{formatDate(referral.date)}</dd>

          <dt>Profit</dt>

          <dd>{formatProfit(referral.profit)}</dd>
        </dl>

        <Link to="/">← Back to dashboard</Link>
      </div>
    </>
  );
};

export default ReferralDetails;
