import React, { Component } from "react";
import NavBar from "../Nav Bar";
import css from "./Leaderboard.module.css";
const API_URL = "http://localhost:5000";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        karen: 0,
        ageo: 0,
        dan: 0,
        chris: 0
      },
      characters: [],
      actual: [],
      players: {
        karen: [],
        ageo: [],
        dan: [],
        chris: []
      }
    };
  }

  async componentDidMount() {
    const response = await fetch(`${API_URL}/data`);
    const data = await response.json();
    var playersData = this.state.players;
    playersData.karen = data.payload[0].karen;
    playersData.ageo = data.payload[0].ageo;
    playersData.dan = data.payload[0].dan;
    playersData.chris = data.payload[0].chris;

    this.setState(state => ({
      characters: data.payload[0].characters,
      actual: data.payload[0].actual,
      playersData
    }));

    const { players, actual } = this.state;
    Object.entries(players).map(([player, guesses]) => {
      const score = guesses.filter(
        (playerGuess, index) => playerGuess === actual[index]
      ).length;
      console.log(score);
      this.setState(state => ({
        count: { ...state.count, [player]: score }
      }));
    });
  }

  // so make an array with different character names and one with their status
  // in this componentDidMount object entries will present as an array wiht an array inside of it so you need to put inside an array when mapping
  // filter through so that only those that are the same are kept
  // set the state of count to that players name and with a certain score
  // in the predictions collection, make an array of names and status with the same order

  render() {
    const { karen, ageo, dan, chris } = this.state.count;
    return (
      <div>
        <NavBar />
        <div className={css.scores}>
          <h1 className={css.title}>Scores</h1>
          <h1> Chris : {chris}</h1>
          <h1> Ageo : {ageo}</h1>
          <h1> Dan : {dan}</h1>
          <h1>Karen : {karen}</h1>
        </div>
      </div>
    );
  }
}
export default Leaderboard;
