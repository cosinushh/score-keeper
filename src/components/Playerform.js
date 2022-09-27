function Playerform({ clickHandler }) {
  return (
    <form onSubmit={clickHandler}>
      <label>
        Add Playername:
        <input type="text" name="playername" id="playername" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default Playerform;
