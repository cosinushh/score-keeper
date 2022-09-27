import "./Player.css";

function Player({ playerName, score, clickIncrease, clickDecrease }) {
  return (
    <li className="player">
      <h2>{playerName}</h2>
      <div className="score">
        <button className="button-28" type="button" onClick={clickDecrease}>
          -
        </button>
        <p>{score}</p>
        <button className="button-28" type="button" onClick={clickIncrease}>
          +
        </button>
      </div>
    </li>
  );
}

export default Player;
