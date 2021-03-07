import * as React from "react";
import { LobbyClient } from "boardgame.io/client";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSessionStorage } from "beautiful-react-hooks";

import JoinScreen from "../JoinScreen";
import CreateGameScreen from "../CreateGameScreen";
import LobbyScreen from "../LobbyScreen";
import GameScreen from "../GameScreen";
import Home from "../Home";

const { protocol, hostname, port } = window.location;

const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : `${protocol}//${hostname}:${port}`;

export default function App() {
  const [lobbyClient] = React.useState(new LobbyClient({ server }));
  const [storedPlayerData, setStoredPlayerData] = useSessionStorage(
    "nightstand-stuff-data",
    {}
  );

  const history = useHistory();

  const handleJoin = async ({ playerID, playerName, matchID }) => {
    const { playerCredentials } = await lobbyClient.joinMatch(
      "nightstand-stuff",
      matchID,
      {
        playerID,
        playerName,
      }
    );

    setStoredPlayerData({
      playerID,
      playerCredentials,
      matchID,
    });

    history.push(`/lobby/${matchID}/${playerID}`);
  };

  return (
    <Switch>
      <Route path="/create">
        <CreateGameScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/lobby/:matchID/:playerID">
        <LobbyScreen
          lobbyClient={lobbyClient}
          storedPlayerData={storedPlayerData}
        />
      </Route>
      <Route path="/join">
        <JoinScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/game/:matchID/:playerID">
        <GameScreen storedPlayerData={storedPlayerData} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
