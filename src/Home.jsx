import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import StatesOfHome from "./StatesOfHome";
import TrendingApp from "./TrendingApp";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
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
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Banner />
          <StatesOfHome />
          <TrendingApp />
        </div>
      )}
    </>
  );
};

export default Home;
