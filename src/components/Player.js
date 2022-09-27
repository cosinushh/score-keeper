import styled from "styled-components";

function Player({ playerName, score }) {
  return (
    <li>
      <h2>{playerName}</h2>
      <button>-</button>
      <p>{score}</p>
      <button>+</button>
    </li>
  );
}

export default Player;
