/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";

function App() {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [hearts, setHearts] = useState([]);

  const startLoveFlow = () => {
    const newHearts = [];
    for (let i = 0; i < 50; i++) {
      const heart = {
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 2 + 2,
      };
      newHearts.push(heart);
    }
    setHearts(newHearts);
  };

  const handleYesClick = () => {
    setYes(true);
    startLoveFlow();
  };

  return (
    <div className="hero scrollbody">
      <div className="container">
        {!yes && (
          <>
            <h1>Will You Be My Valentine?</h1>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2UyaDBnZzhxYnB1b2VuNGJldDQ2MTY5Z3A1d3d0YW43d290a3FxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3QBVkqUJRmDXNIpPE/giphy.gif"
              alt="Cute GIF"
              className="cute-gif"
            />
            <p style={{ fontWeight: "bold" }}>Hey love,</p>
            <p>
              Every moment with you feels like a dream. You make my life so much
              brighter, and i can't imagine it without you
            </p>
            <p>This Valentine's Day, I want to ask you something...</p>
            <p>Will you be my Valentine?</p>
            <div className="button-container">
              <button className="yesButton" onClick={handleYesClick}>
                Yes
              </button>
              <button className="noButton" onClick={() => setNo(true)}>
                No
              </button>
            </div>
            {no && (
              <h4 style={{ marginTop: "30px" }}>My baby please nau🥺🥺🥺</h4>
            )}
          </>
        )}
        {yes && (
          <>
            <h1 style={{ fontWeight: "bold" }}>
              Yay! You just made me the happiest person in the world!
            </h1>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTd0YjY3anQ0bmt4aHdvZjMwN3NxeWxhMGM0MmpodXVuNTN5eXQzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vX1C2TejT6OCOz2kLd/giphy.gif"
              alt="Cute GIF"
              className="response-gif"
            />
            <div className="animation-container">
              {hearts.map((heart) => (
                <div
                  key={heart.id}
                  className="heart"
                  style={{
                    left: `${heart.left}vw`,
                    animationDuration: `${heart.duration}s`,
                  }}
                />
              ))}
            </div>
            <h4 style={{marginTop:"20px"}}>I love you Aleeyah❤️</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
