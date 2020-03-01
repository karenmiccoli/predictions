import React from "react";

import css from "./Character.module.css";

const Character = ({ name, house, status, image }) => {
  return (
    <div className={css.container}>
      <div className={css.characters}>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        <div className={css.text}>
          <div className={css.name}>{name}</div>
          <div className={css.status}>{status}</div>
        </div>
      </div>
    </div>
  );
};

export default Character;
