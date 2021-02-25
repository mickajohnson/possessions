import * as React from "react";
import ReactDOM from "react-dom";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { NightStandStuff } from "./game";
import NightStandStuffBoard from "./components/Board";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const App = () => {
  const [playerID, setPlayerID] = React.useState(null);
  if (playerID === null) {
    return (
      <div>
        <p>Play as</p>
        <button onClick={() => setPlayerID("0")}>Player 0</button>
        <button onClick={() => setPlayerID("1")}>Player 1</button>
      </div>
    );
  }
  return (
    <>
      <GameClient playerID={playerID} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
