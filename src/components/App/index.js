import * as React from "react";
import { LobbyClient } from "boardgame.io/client";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSessionStorage } from "beautiful-react-hooks";

import JoinScreen from "../JoinScreen";
import CreateGameScreen from "../CreateGameScreen";
import LobbyScreen from "../LobbyScreen";
import GameScreen from "../GameScreen";
import HomeScreen from "../HomeScreen";
import RulesScreen from "../RulesScreen";

const { protocol, hostname, port } = window.location;

const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : `${protocol}//${hostname}:${port}`;

export default function App() {
  const [lobbyClient] = React.useState(new LobbyClient({ server }));
  const [storedPlayerData, setStoredPlayerData] = useSessionStorage(
    "possessions-data",
    {}
  );

  const history = useHistory();

  const handleJoin = async ({ playerID, playerName, matchID }) => {
    const { playerCredentials } = await lobbyClient.joinMatch(
      "possessions",
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
      <Route path="/rules">
        <RulesScreen />
      </Route>
      <Route path="/game/:matchID/:playerID">
        <GameScreen storedPlayerData={storedPlayerData} />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
}
