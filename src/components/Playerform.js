import "./Playerform.css";

function Playerform({ clickHandler }) {
  return (
    <form onSubmit={clickHandler}>
      <label htmlFor="playername">Add Playername: </label>
      <input type="text" name="playername" id="playername" />
      <button className="button-28" type="submit">
        Add player
      </button>
    </form>
  );
}

export default Playerform;
