import React from "react";
import { Link } from "react-router";

const NothingFound = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <img
          style={{
            display: "inline-block",
          }}
          src="/error-404.png"
          alt=""
        />
      </div>
      <div>
        <h3
          style={{
            color: "rgba(0, 25, 49, 1)",
            fontFamily: "Inter",
            fontSize: "48px",
            fontWeight: 600,
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Oops, page not found!
        </h3>
        <p
          style={{
            color: "rgba(98, 115, 130, 1)",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          The page you are looking for is not available
        </p>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            marginBottom: "80px",
            marginTop: "20px",
          }}
        >
          <Link
            style={{
              display: "inline-block",
            }}
            className="showAll-btn"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NothingFound;
