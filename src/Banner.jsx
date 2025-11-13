import React from "react";

const Banner = () => {
  return (
    <div
      className="banner-container-class-pro"
      style={{
        width: "100%",
        height: "960px",
      }}
    >
      <div
        className="banner-container-class"
        style={{
          margin: "80px auto 0px auto",
          background: "url('/hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 60%",
          backgroundPosition: "bottom center",
          width: "calc(100% - 160px)",
          height: "100%",
          padding: "1px",
        }}
      >
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "72px",
            fontWeight: "600",
            textAlign: "center",
            color: "black",
          }}
        >
          We Build <br></br>
          <span
            style={{
              background:
                "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1))",
              backgroundClip: "text",
              color: "transparent",
            }}
            id="productiveSpan"
          >
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="banner-details">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>
        <p className="banner-details">
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            className="banner-button"
          >
            <img src="/playStore.png" alt="" /> <button>Google Play</button>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="banner-button"
          >
            {" "}
            <img src="/appstore.png"></img> <button>App Store</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
