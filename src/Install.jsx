import React, { useEffect, useState } from "react";
import SingleInstall from "./SingleInstall";
import { getItemsFromLS } from "./utilities";

const Install = () => {
  const [AllAppData, setAllAppData] = useState([]);
  const [installed, setInstalled] = useState([]);

  const [loading, setLoading] = useState(true);
  const [subloading, setsubLoading] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setAllAppData(res);
      });

    setTimeout(() => {
      setLoading(false);
    }, 800);

    setTimeout(() => {
      setsubLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const getInstall = getItemsFromLS();
      const currentInstall = AllAppData.filter((app1) =>
        getInstall.includes(app1.id)
      );
      setInstalled(currentInstall);
    }, 1500);
  }, [AllAppData]);

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
        <div>
          <div>
            <h4
              style={{
                textAlign: "center",
                marginTop: "80px",
              }}
              className="trending-title"
            >
              Your Installed Apps
            </h4>
            <p
              style={{
                textAlign: "center",
              }}
              className="trending-subtitle"
            >
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div
            className="installedApps-search-count"
            style={{
              width: "calc(100% - 160px)",
              margin: "10px auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(0, 25, 49, 1)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {installed.length} app found
              </p>
            </div>

            <div>
              <button
                className="btn"
                popoverTarget="popover-1"
                style={{
                  anchorName: "--anchor-1",
                  backgroundColor: "rgb(234, 234, 234)",
                  color: "black",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "6px 20px",
                }}
              >
                Short by Size{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <ul
                className="dropdown menu w-40 rounded-box shadow-sm"
                popover="auto"
                id="popover-1"
                style={{
                  positionAnchor: "--anchor-1",
                  backgroundColor: "#ccc",
                  color: "black",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "155.25px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "5px 0",
                }}
              >
                <li
                  style={{
                    width: "145px",
                  }}
                >
                  <a
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      marginBottom: "5px",
                      cursor: "pointer",
                      padding: "0",
                      width: "100%",
                    }}
                  >
                    <button
                      className="temp-btn"
                      onClick={() => {
                        const sortedInstalledDesc = [...installed].sort(
                          (a, b) => a.downloads - b.downloads
                        );
                        setInstalled([...sortedInstalledDesc]);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Low to Hight
                    </button>
                  </a>
                </li>
                <li
                  style={{
                    width: "145px",
                  }}
                >
                  <a
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      cursor: "pointer",
                      padding: "0",
                      width: "100%",
                    }}
                  >
                    <button
                      className="temp-btn"
                      onClick={() => {
                        const sortedInstalledDesc = [...installed].sort(
                          (a, b) => b.downloads - a.downloads
                        );
                        setInstalled([...sortedInstalledDesc]);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      High to Low
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {subloading ? (
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
              className="installedAppsShower"
              style={{
                width: "calc(100% - 160px)",
                margin: "10px auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              {installed.map((install1) => (
                <SingleInstall
                  key={install1.id}
                  install1={install1}
                  installed={installed}
                  setInstalled={setInstalled}
                ></SingleInstall>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Install;
