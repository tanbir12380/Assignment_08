import React from "react";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/AllApp/${app.id}`);
      }}
      className="app-card"
    >
      <div className="app-card-img">
        <img src={app.image} alt="App Logo" />
      </div>

      <p className="app-card-name">{app.title}</p>

      <div className="app-card-stats">
        <button className="stat-btn1">
          {" "}
          <img src="/download.png" alt="" />
          {app.downloads} M
        </button>
        <button className="stat-btn2">
          {" "}
          <img src="/star.png" alt="" /> {app.ratingAvg}
        </button>
      </div>
    </div>
  );
};

export default AppCard;
