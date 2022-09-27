import styled from "styled-components";

function Player({ playerName, score, clickIncrease, clickDecrease, id }) {
  return (
    <li>
      <h2>{playerName}</h2>
      <button type="button" onClick={() => clickDecrease(id)}>
        -
      </button>
      <p>{score}</p>
      <button type="button" onClick={() => clickIncrease(id)}>
        +
      </button>
    </li>
  );
}

export default Player;
