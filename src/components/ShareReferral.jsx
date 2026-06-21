const ShareReferral = ({ referral }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="share-referral" className="share-section">
      <h2>Share & Earn Rewards</h2>

      <p className="share-subtitle">Invite partners and grow your earnings.</p>

      <div className="share-box">
        <label>Your Referral Link</label>

        <div className="copy-container">
          <input value={referral.link} readOnly />

          <button onClick={() => copyText(referral.link)}>Copy</button>
        </div>

        <label>Your Referral Code</label>

        <div className="copy-container">
          <input value={referral.code} readOnly />

          <button onClick={() => copyText(referral.code)}>Copy</button>
        </div>
      </div>
    </section>
  );
};

export default ShareReferral;
