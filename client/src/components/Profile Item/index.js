import React from "react";
import css from "./Item.module.css";

const ProfileItem = ({ name, house, image, playerClick }) => {
  return (
    <div className={css.container} onClick={playerClick}>
      <div className={css.image}>
        <img src={image} alt="house sigil" />
      </div>
      <div className={css.text}>
        <div className={css.name}>{name}</div>
        <div className={css.house}>House {house}</div>
      </div>
    </div>
  );
};

export default ProfileItem;
