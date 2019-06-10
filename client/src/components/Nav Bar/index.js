import React from "react";
import { Link } from "react-router-dom";

const css = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center"
};

const NavBar = () => {
  return (
    <div style={css}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        Home Page
      </Link>
      <Link
        to="/predictions"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        Predictions
      </Link>{" "}
      <Link
        to="/leaderboard"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        Leaderboard
      </Link>{" "}
    </div>
  );
};

export default NavBar;
