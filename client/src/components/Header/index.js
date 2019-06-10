import React from "react";
import css from "./Header.module.css";
const Header = ({ selectedPlayer, backHome }) => {
  return (
    <div className={css.container}>
      <div className={css.player}>
        <div className={css.image}>
          <img src={selectedPlayer.houseUrl} alt="house sigil" />
        </div>

        <div className={css.text}>
          <div className={css.name}>
            <h2>{selectedPlayer.name}</h2>
          </div>

          <div className={css.house}>
            <h2> House {selectedPlayer.house} </h2>
          </div>
        </div>
      </div>

      <div className={css.previousPage}>
        <div className={css.backText} onClick={backHome}>
          Back
        </div>
        <div className={css.backButton}>
          <img
            onClick={backHome}
            className={css.button}
            src="./images/icons/undo-solid.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
