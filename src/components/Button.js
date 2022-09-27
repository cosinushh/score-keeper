import "./Button.css";

function Button({ text, handler }) {
  return (
    <button className="button-28" onClick={handler}>
      {text}
    </button>
  );
}

export default Button;
