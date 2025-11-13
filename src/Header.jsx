import React from "react";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="nav-left"
      >
        <div className="nav-logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="nav-title">
          <h3>HERO.IO</h3>
        </div>
      </div>

      <div className="nav-links">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="AllApp">Apps</NavLink>
          <NavLink to="install">Installation</NavLink>
        </nav>
      </div>

      <div className="nav-right">
        <a target="_blank" href="https://github.com/tanbir12380">
          <img
            style={{
              width: "20px",
              heihgt: "20px",
              objectFit: "contain",
            }}
            src="/git.png"
            alt=""
          />
          <button>Contribute</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
