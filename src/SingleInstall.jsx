import React, { useContext } from "react";
import { removeItemToLS } from "./utilities";
import { OurContext } from "./OurContext";
import { ToastContainer, toast } from "react-toastify";

const SingleInstall = ({ install1, installed, setInstalled }) => {
  const [installedAppList, setInstalledAppList] = useContext(OurContext);

  return (
    <div
      className="singleInstallApps"
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "4px",
        padding: "16px",
        gap: "16px",
      }}
    >
      <div className="singleInstallAppsImg">
        <img
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          src={install1.image}
          alt=""
        />
      </div>
      <div
        style={{
          flex: "1",
          textAlign: "left",
          color: "black",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h5
            style={{
              color: "rgba(0, 25, 49, 1)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            {install1.title}
          </h5>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <button className="stat-btn1">
              {" "}
              <img src="/download.png" alt="" />
              {install1.downloads} M
            </button>
            <button className="stat-btn2">
              {" "}
              <img src="/star.png" alt="" /> {install1.ratingAvg}
            </button>
            <p
              style={{
                color: "rgba(98, 115, 130, 1)",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {install1.size}MB
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            const newInstallList = installed.filter(
              (apps2) => apps2.id !== install1.id
            );
            setInstalled(newInstallList);
            setInstalledAppList(newInstallList);
            removeItemToLS(install1.id);

            console.log("list from single install page:", installedAppList);
            toast(`${install1.title} is unistalled successfully`);
          }}
          className="unistall-btn"
        >
          Unistall
        </button>
      </div>
    </div>
  );
};

export default SingleInstall;
