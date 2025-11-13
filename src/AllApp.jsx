import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import NoAppFound from "./NoAppFound";

const AllApp = () => {
  const [data, setData] = useState([]);
  const [allAppData, setAllAppData] = useState([]);
  const [fullloading, fullsetLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fullsetLoading(true);
    setLoading(true);

    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setAllAppData(res);
        setData(res);

        setTimeout(() => {
          fullsetLoading(false);
        }, 800);

        setTimeout(() => {
          setLoading(false);
          setCount(res.length);
        }, 1500);
      });
  }, []);

  const handleSearch = (key) => {
    setLoading(true);
    setCount(0);
    const keyLower = key.toLowerCase();
    setTimeout(() => {
      const matched = allAppData.filter((app) =>
        app.title.toLowerCase().includes(keyLower)
      );
      setData(matched);
      setCount(matched.length);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {fullloading ? (
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
        <div className="trending">
          <h4 className="trending-title">Our All Applications</h4>
          <p className="trending-subtitle">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>

          <div
            className="AllAppSearchAndCount"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "rgb(0, 25, 49)",
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              ({count}) App Found
            </p>

            <div
              style={{
                width: "400px",
                height: "44px",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                paddingLeft: "20px",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="search.png"
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "20px",
                }}
              />

              <input
                style={{
                  color: "black",
                }}
                className="AllAppSearch"
                type="text"
                placeholder="search Apps"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

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
          ) : count ? (
            <div className="trending-wrapper">
              {data.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <NoAppFound />
          )}
        </div>
      )}
    </>
  );
};

export default AllApp;
