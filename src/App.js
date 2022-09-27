import "./App.css";
import { useState } from "react";
import Player from "./components/Player";
import Button from "./components/Button";
import Playerform from "./components/Playerform";
import { nanoid } from "nanoid";

/* const initialPlayers = [
  {
    id: "98sad98s",
    name: "Hans",
    score: 0,
  },
  {
    id: "6a762ass2",
    name: "Kurt",
    score: 10,
  },
]; */

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayer(event) {
    event.preventDefault();
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { id: nanoid(), name: event.target.playername.value, score: 0 },
    ]);
  }

  function increaseScore(id) {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (id === player.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      })
    );
  }

  function decreaseScore(id) {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (id === player.id) {
          return { ...player, score: player.score - 1 };
        } else {
          return player;
        }
      })
    );
  }

  return (
    <div className="App">
      <ul>
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              playerName={player.name}
              score={player.score}
              clickIncrease={increaseScore}
              clickDecrease={decreaseScore}
            />
          );
        })}
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <Playerform clickHandler={addPlayer} />
    </div>
  );
}

export default App;
