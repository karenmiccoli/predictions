import React from "react";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.menu}>
        <ul>
          <li className={css.pages}>
            <Link to="/predictions">Predictions</Link>
          </li>
          <li className={css.pages}>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
