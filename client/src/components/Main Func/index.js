import React, { Component } from "react";
import MainPage from "../Main Page";
import ProfilePredictions from "../Profile Predictions";
import Header from "../Header";
import NavBar from "../Nav Bar";
const API_URL = "http://localhost:5000";

class MainFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerProfiles: [],
      selectedPlayer: null
    };
  }

  async componentDidMount() {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    console.log(data);
    this.setState(() => ({ playerProfiles: data.payload }));
  }

  playerClick = id => {
    const { playerProfiles } = this.state;
    console.log("this is the id", id);
    let player = playerProfiles.find(obj => obj._id === id);
    console.log(player);
    this.setState({ selectedPlayer: player });
  };

  backToMainPage = () => {
    this.setState(() => ({ selectedPlayer: null }));
  };

  render() {
    const { playerProfiles, selectedPlayer } = this.state;
    return (
      <>
        {!selectedPlayer ? (
          <div>
            <NavBar />
            <MainPage
              playerClick={this.playerClick}
              playerProfiles={playerProfiles}
            />
          </div>
        ) : (
          <>
            <Header
              selectedPlayer={selectedPlayer}
              backHome={this.backToMainPage}
            />
            <ProfilePredictions selectedPlayer={selectedPlayer} />
          </>
        )}
      </>
    );
  }
}

export default MainFunc;
