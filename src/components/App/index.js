import * as React from "react";
import { NightStandStuff } from "../../game";
import NightStandStuffBoard from "../Board";
import JoinScreen from "../JoinScreen";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { LobbyClient } from "boardgame.io/client";

import CreateGameScreen from "../CreateGameScreen";
import LobbyScreen from "../LobbyScreen";
import Home from "../Home";

import { Switch, Route, useHistory } from "react-router-dom";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

export default function App() {
  const [lobbyClient] = React.useState(
    new LobbyClient({ server: "http://localhost:8000" })
  );
  const [credentials, setCredentials] = React.useState("");
  const [playerID, setPlayerID] = React.useState(null);
  const [matchID, setMatchID] = React.useState(null);

  const history = useHistory();

  const handleJoin = async ({ playerId, playerName, matchId }) => {
    setPlayerID(playerId);
    setMatchID(matchId);

    const { playerCredentials } = await lobbyClient.joinMatch(
      "nightstand-stuff",
      matchId,
      {
        playerID: playerId,
        playerName,
      }
    );
    setCredentials(playerCredentials);

    history.push("/lobby");
  };

  return (
    <Switch>
      <Route path="/create">
        <CreateGameScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/lobby">
        <LobbyScreen
          matchID={matchID}
          lobbyClient={lobbyClient}
          playerID={playerID}
        />
      </Route>
      <Route path="/join">
        <JoinScreen onJoin={handleJoin} lobbyClient={lobbyClient} />
      </Route>
      <Route path="/game">
        <GameClient
          credentials={credentials}
          matchID={matchID}
          playerID={playerID}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
