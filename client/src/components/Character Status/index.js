import React, { Component } from "react";
import Character from "../Character";
import css from "./CharacterStatus.module.css";
const API_URL = "http://localhost:5000";

class CharacterStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      karensPred: []
    };
  }

  async componentDidMount() {
    const response = await fetch(`${API_URL}/characters`);
    const data = await response.json();
    this.setState(() => ({ charactersData: data.payload }));
  }

  render() {
    const { charactersData } = this.state;
    return (
      <div className={css.container}>
        <div className={css.rowOne}>
          {charactersData.slice(0, 6).map((character, idx) => (
            <Character
              className={css.rowOne}
              name={character.name}
              key={idx}
              status={character.status}
              image={character.image}
            />
          ))}
        </div>
        <div className={css.rowTwo}>
          {charactersData.slice(6, 12).map((character, idx) => (
            <Character
              className={css.rowTwo}
              name={character.name}
              key={idx}
              status={character.status}
              image={character.image}
            />
          ))}
        </div>
        <div className={css.rowThree}>
          {charactersData.slice(12, 18).map((character, idx) => (
            <Character
              className={css.rowTwo}
              name={character.name}
              key={idx}
              status={character.status}
              image={character.image}
            />
          ))}
        </div>
        <div className={css.rowFour}>
          {charactersData.slice(18, 24).map((character, idx) => (
            <Character
              className={css.rowTwo}
              name={character.name}
              key={idx}
              status={character.status}
              image={character.image}
            />
          ))}
        </div>
        <div className={css.rowFive}>
          {charactersData.slice(24, 30).map((character, idx) => (
            <Character
              className={css.rowTwo}
              name={character.name}
              key={idx}
              status={character.status}
              image={character.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterStatus;
