import * as React from "react";
import { LobbyClient } from "boardgame.io/client";
import { Switch, Route, useHistory } from "react-router-dom";

import JoinScreen from "../JoinScreen";
import CreateGameScreen from "../CreateGameScreen";
import LobbyScreen from "../LobbyScreen";
import GameScreen from "../GameScreen";
import Home from "../Home";

export default function App() {
  const [lobbyClient] = React.useState(
    new LobbyClient({ server: "http://localhost:8000" })
  );
  const [credentials, setCredentials] = React.useState("");

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
    setCredentials(playerCredentials);

    history.push(`/lobby/${matchID}/${playerID}`);
  };

  return (
    <Switch>
      <Route path="/create">
        <CreateGameScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/lobby/:matchID/:playerID">
        <LobbyScreen lobbyClient={lobbyClient} />
      </Route>
      <Route path="/join">
        <JoinScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/game/:matchID/:playerID">
        <GameScreen credentials={credentials} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
