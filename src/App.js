import "./App.css";
import { useState } from "react";
import Player from "./components/Player";
import Button from "./components/Button";
import styled from "styled-components";

const initialPlayers = [
  {
    name: "Hans",
    score: 0,
  },
  {
    name: "Kurt",
    score: 10,
  },
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);

  return (
    <div className="App">
      <ul>
        {players.map((player) => {
          return <Player playerName={player.name} score={player.score} />;
        })}
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <Playerform />
    </div>
  );
}

export default App;

function Playerform() {
  return (
    <form>
      <label>
        Add Playername:
        <input />
      </label>
      <Button text="Add" />
    </form>
  );
}
