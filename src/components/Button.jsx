import './Button.css';

function Button({ text, buttonType, onClickEvent }) {
  return (
    <button
      type="text"
      className={`btn emotion_type_${buttonType}`}
      onClick={onClickEvent}
    >
      {text}
    </button>
  );
}

export default Button;
