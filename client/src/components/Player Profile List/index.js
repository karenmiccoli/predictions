import React from "react";
import ProfileItem from "../Profile Item";
// import css from "./List.module.css";

const PlayerList = ({ profileList, playerClick }) => {
  return (
    <div className="container">
      {profileList.map((item, idx) => (
        <ProfileItem
          name={item.name}
          house={item.house}
          image={item.image}
          key={idx}
          playerClick={() => playerClick(item.id)}
        />
      ))}
    </div>
  );
};

export default PlayerList;
