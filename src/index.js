import React from "react";
import ReactDOM from "react-dom";
import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import NightStandStuff from "./game";
import NightStandStuffBoard from "./components/Board";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: Local(),
});

const App = () => (
  <>
    <GameClient playerID="0" />
    <br />
    <br />
    <GameClient playerID="1" />
  </>
);

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
