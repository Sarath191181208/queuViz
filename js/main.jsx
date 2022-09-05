const { useState, useEffect, useCallback, useRef } = React;
const { createRoot } = ReactDOM;

const COLORS = [
  "#fe5a31",
  "#fec031",
  "#20ab6f",
  "#31a2fe",
  "#fe3180",
  "#FF6712",
];

const root = createRoot(document.getElementById("root"));
root.render(<Main />);

function Main() {
  const { queue, queueAdd, queuePop } = useQueue();
  return (
    <div className="screen">
      <div className="controls">
        <Inputbox onSubmitFn={(e) => queueAdd(e)} onMinus={queuePop} />
      </div>
      <div className="sim-container">
        <StackScreen queue={queue} />
      </div>
    </div>
  );
}

function StackScreen({ queue }) {
  return (
    <div className="stack-container">
      {queue.length > 0 ? (
        queue
          .slice()
          .reverse()
          .map((ele, index) => {
            return (
              <div
                className="stack-ele"
                style={{
                  backgroundColor: "var(--primary-color)",
                }}
              >
                {ele}
              </div>
            );
          })
      ) : (
        <div className="center-container">
          <p className="helper-txt">
            Enter in the input box to add elements of a queue. Press pop to
            deque an element in the queue.
          </p>
        </div>
      )}
    </div>
  );
}
