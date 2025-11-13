import React from "react";

const StatesOfHome = () => {
  return (
    <div className="trusted-container">
      <h3 className="trusted-title">Trusted by Millions, Built for You</h3>

      <div className="card-container">
        <div className="trusted-card">
          <p className="trusted-label">Total Downloads</p>
          <h4 className="trusted-value">29.6M</h4>
          <p className="trusted-sub">21% more than last month</p>
        </div>

        <div className="trusted-card">
          <p className="trusted-label">Total Reviews</p>
          <h4 className="trusted-value">906K</h4>
          <p className="trusted-sub">46% more than last month</p>
        </div>

        <div className="trusted-card">
          <p className="trusted-label">Active Apps</p>
          <h4 className="trusted-value">132+</h4>
          <p className="trusted-sub">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StatesOfHome;
