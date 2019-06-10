import React from "react";
import css from "./Predictions.module.css";

const ProfilePredictions = ({ selectedPlayer }) => {
  console.log("this is", selectedPlayer.predictions);
  return (
    <div className={css.container}>
      <div className={css.rowOne}>
        {selectedPlayer.predictions.slice(0, 6).map((item, idx) => (
          <div className={css.characterContainer}>
            <div className={css.characters}>
              <div className={css.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.text}>
                <div className={css.name}>{item.name}</div>
                <div className={css.status}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.rowTwo}>
        {selectedPlayer.predictions.slice(6, 12).map((item, idx) => (
          <div className={css.characterContainer}>
            <div className={css.characters}>
              <div className={css.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.text}>
                <div className={css.name}>{item.name}</div>
                <div className={css.status}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.rowThree}>
        {selectedPlayer.predictions.slice(12, 18).map((item, idx) => (
          <div className={css.characterContainer}>
            <div className={css.characters}>
              <div className={css.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.text}>
                <div className={css.name}>{item.name}</div>
                <div className={css.status}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.rowFour}>
        {selectedPlayer.predictions.slice(18, 24).map((item, idx) => (
          <div className={css.characterContainer}>
            <div className={css.characters}>
              <div className={css.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.text}>
                <div className={css.name}>{item.name}</div>
                <div className={css.status}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.rowFive}>
        {selectedPlayer.predictions.slice(24, 30).map((item, idx) => (
          <div className={css.characterContainer}>
            <div className={css.characters}>
              <div className={css.image}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.text}>
                <div className={css.name}>{item.name}</div>
                <div className={css.status}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePredictions;
