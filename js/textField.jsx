const { useState } = React;

const Inputbox = ({ onSubmitFn, onMinus }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="text-input-container">
      <button className="btn left-border" onClick={onMinus}>
        Dequeue
      </button>
      <input
        type="text"
        id="txt-box"
        className="txt-box"
        name="txt-box"
        onChange={handleChange}
        value={message}
      />
      <button
        className="btn right-border"
        onClick={() => {
          onSubmitFn(message);
          setMessage(() => "");
        }}
      >
        Enqueue
      </button>
    </div>
  );
};
