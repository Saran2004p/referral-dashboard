const Overview = ({ metrics }) => {
  return (
    <section className="overview-section">
      <h2>Overview</h2>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className="metric-card">
            <div className="metric-icon">📈</div>

            <p>{metric.value}</p>

            <h4>{metric.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
