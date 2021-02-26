import * as React from "react";
import ReactDOM from "react-dom";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { LobbyClient } from "boardgame.io/client";

import CreateGameScreen from "./components/CreateGameScreen";
import LobbyScreen from "./components/LobbyScreen";

import "./index.css";
// import reportWebVitals from "./reportWebVitals";

import { NightStandStuff } from "./game";
import NightStandStuffBoard from "./components/Board";
import every from "lodash/every";
import JoinScreen from "./components/JoinScreen";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const App = () => {
  const lobbyClient = React.useRef(
    new LobbyClient({ server: "http://localhost:8000" })
  );
  const credentials = React.useRef(null);
  const [playerID, setPlayerID] = React.useState(null);
  const [matchID, setMatchID] = React.useState(null);
  const [match, setMatch] = React.useState({});

  // TODO: replace with react router
  const [view, setView] = React.useState("MAIN");

  React.useEffect(() => {
    if (match.players && every(match.players, (player) => player.name)) {
      setView("GAME");
    }
  }, [match]);

  const handleCreateGameClick = () => {
    setView("CREATE");
    console.log(lobbyClient.current, lobbyClient);
  };

  const handleCreateGame = async (playerName, numberOfPlayers) => {
    const createMatchResponse = await lobbyClient.current.createMatch(
      "nightstand-stuff",
      {
        numPlayers: Number(numberOfPlayers),
      }
    );

    console.log("createMatchResponse", createMatchResponse);

    handleJoin("0", playerName, createMatchResponse.matchID);
  };

  const handleJoin = async (playerId, playerName, matchId) => {
    setPlayerID(playerId);
    setMatchID(matchId);

    const { playerCredentials } = await lobbyClient.current.joinMatch(
      "nightstand-stuff",
      matchId,
      {
        playerID: playerId,
        playerName,
      }
    );
    credentials.current = playerCredentials;

    setView("LOBBY");
  };

  const getMatchInfo = async () => {
    const matchInfo = await lobbyClient.current.getMatch(
      "nightstand-stuff",
      matchID
    );
    setMatch(matchInfo);
  };

  if (view === "CREATE") {
    return <CreateGameScreen handleCreateGame={handleCreateGame} />;
  }
  if (view === "LOBBY") {
    return (
      <LobbyScreen
        getMatchInfo={getMatchInfo}
        match={match}
        playerID={playerID}
      />
    );
  }
  if (view === "JOIN") {
    return (
      <JoinScreen onJoin={handleJoin} getMatch={lobbyClient.current.getMatch} />
    );
  }

  if (view === "GAME") {
    return <GameClient playerID={playerID} />;
  }
  return (
    <div>
      <button onClick={handleCreateGameClick}>Create Game</button>
      <button onClick={() => setView("JOIN")}>Join Game</button>
    </div>
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
// reportWebVitals();
