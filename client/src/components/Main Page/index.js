import React from "react";
import css from "./MainPage.module.css";
import ProfileList from "../Player Profile List";
import CharacterStatus from "../Character Status";

const MainPage = ({ playerProfiles, playerClick }) => {
  const propsToProfileList = playerProfiles.map(profile => ({
    name: profile.name,
    house: profile.house,
    image: profile.houseUrl,
    id: profile._id
  }));

  return (
    <div className={css.mainContainer}>
      <div className={css.profileList}>
        <ProfileList
          profileList={propsToProfileList}
          playerClick={playerClick}
        />
      </div>
      <div className={css.characterStatus}>
        <CharacterStatus />
      </div>
    </div>
  );
};

export default MainPage;
