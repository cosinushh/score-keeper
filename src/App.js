import "./App.css";
import { useState } from "react";
import Player from "./components/Player";
import Button from "./components/Button";
import Playerform from "./components/Playerform";
import { nanoid } from "nanoid";

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

  function resetScores() {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetAll() {
    setPlayers((prevPlayers) => (prevPlayers = []));
  }

  return (
    <div className="App">
      <h1>Score Keeper</h1>
      <ul>
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              playerName={player.name}
              score={player.score}
              clickIncrease={() => increaseScore(player.id)}
              clickDecrease={() => decreaseScore(player.id)}
            />
          );
        })}
      </ul>
      <Button text="Reset scores" handler={resetScores} />
      <Button text="Reset all" handler={resetAll} />
      <Playerform clickHandler={addPlayer} />
    </div>
  );
}

export default App;
