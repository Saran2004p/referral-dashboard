const ServiceSummary = ({ serviceSummary }) => {
  return (
    <section className="summary-section">
      <h2>Service summary</h2>

      <div className="summary-grid">
        <div>
          <h4>Service</h4>
          <p>{serviceSummary.service}</p>
        </div>

        <div>
          <h4>Your Referrals</h4>
          <p>{serviceSummary.yourReferrals}</p>
        </div>

        <div>
          <h4>Active Referrals</h4>
          <p>{serviceSummary.activeReferrals}</p>
        </div>

        <div>
          <h4>Total Ref. Earnings</h4>
          <p>{serviceSummary.totalRefEarnings}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
