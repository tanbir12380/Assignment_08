import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { setItemToLS } from "./utilities";
import { OurContext } from "./OurContext";
import { ToastContainer, toast } from "react-toastify";
import NoAppFound from "./NoAppFound";
import NoAppFoundPro from "./NoAppFoundPro";

const AppDetails = () => {
  const { id } = useParams();

  const allData = useLoaderData();

  const allDataId = allData.map((singleData) => singleData.id);

  const ourId = parseInt(id);

  const [installedAppList, setInstalledAppList] = useContext(OurContext);

  const [insOrUni, setInsOrUni] = useState();

  useEffect(() => {
    if (installedAppList.includes(ourId)) {
      setInsOrUni(false);
    } else {
      setInsOrUni(true);
    }
  }, [installedAppList, ourId]);

  if (allDataId.includes(ourId) === false || ourId != id) {
    return <NoAppFoundPro></NoAppFoundPro>;
  }

  const ourApp = allData.find((app) => app.id === ourId);

  const chartData = [...ourApp.ratings].sort((a, b) => {
    return parseInt(b.name) - parseInt(a.name);
  });

  return (
    <div
      className="AppDetailsShowePro"
      style={{
        width: "calc(100% - 160px)",
        margin: "80px auto",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "40px",
        }}
      >
        <div>
          <img
            style={{
              width: "350px",
              height: "350px",
              objectFit: "cover",
            }}
            src={ourApp.image}
            alt=""
          />
        </div>
        <div
          className="AppDetailsAndStates"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h4
              style={{
                color: "rgb(0, 25, 49)",
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              {ourApp.title}
            </h4>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "400",
                color: "rgba(98, 115, 130, 1)",
              }}
            >
              Developed by{" "}
              <span
                style={{
                  color: "blueviolet",
                  fontWeight: "700",
                }}
              >
                {ourApp.companyName}
              </span>
            </p>
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <div>
            <div
              className="AppDetails-states"
              style={{
                display: "flex",
              }}
            >
              <div>
                <img src="/download.png" alt="" />
                <p>Downloads</p>
                <h5>{ourApp.downloads}M</h5>
              </div>
              <div>
                <img src="/star.png" alt="" />
                <p>Average Ratings</p>
                <h5>{ourApp.ratingAvg}</h5>
              </div>
              <div>
                <img src="/like.png" alt="" />
                <p>Total Reviews</p>
                <h5>{ourApp.reviews}K</h5>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                if (insOrUni) {
                  toast(`${ourApp.title} is installed successfully`);
                  setItemToLS(ourApp.id);
                  setInsOrUni(false);
                  installedAppList.push(ourApp.id);
                  setInstalledAppList([...installedAppList]);
                }
              }}
              className={
                insOrUni ? "AppDetails-button" : "AppDetails-button disabled"
              }
            >
              {insOrUni ? `Install Now (${ourApp.size}MB)` : "installed"}
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          marginTop: "40px",
        }}
      ></div>

      <div>
        <h5
          style={{
            color: " rgba(0, 25, 49, 1)",
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "600",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Ratings
        </h5>
        <BarChart
          width={"100%"}
          height={400}
          data={chartData}
          layout="vertical"
        >
          <Tooltip></Tooltip>

          <XAxis type="number" />

          <YAxis type="category" dataKey="name" />

          <Bar dataKey="count" barSize={25} fill="#ff8811" />
        </BarChart>
      </div>

      <div
        style={{
          width: "100%",
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          marginTop: "40px",
        }}
      ></div>
      <div>
        <h4
          style={{
            color: " rgba(0, 25, 49, 1)",
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "600",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Description
        </h4>
        <p
          style={{
            color: "rgba(98, 115, 130, 1)",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          {ourApp.description + ourApp.description + ourApp.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
