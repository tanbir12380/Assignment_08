import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import { Link } from "react-router";

const TrendingApp = () => {
  const [allAppData, setAllAppData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        setAllAppData(res);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  const AllAppData1 = allAppData.slice(0, 8);

  return (
    <div className="trending">
      <h4 className="trending-title">Trending Apps</h4>
      <p className="trending-subtitle">
        Explore All Trending Apps on the Market developed by us
      </p>

      {loading ? (
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            className="loading loading-bars loading-xl"
            style={{ color: "rgba(0,0,0,0.4)", transform: "scale(1.5)" }}
          ></span>
          <span
            className="loading loading-bars loading-xl"
            style={{ color: "rgba(0,0,0,0.4)", transform: "scale(1.5)" }}
          ></span>
          <span
            className="loading loading-bars loading-xl"
            style={{ color: "rgba(0,0,0,0.4)", transform: "scale(1.5)" }}
          ></span>
        </div>
      ) : (
        <div className="trending-wrapper">
          {AllAppData1.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        <Link className="showAll-btn" to="/AllApp">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApp;
