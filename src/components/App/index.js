import * as React from "react";
import { NightStandStuff } from "../../game";
import NightStandStuffBoard from "../Board";
import every from "lodash/every";
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
  const lobbyClient = React.useRef(
    new LobbyClient({ server: "http://localhost:8000" })
  );
  const [credentials, setCredentials] = React.useState("");
  const [playerID, setPlayerID] = React.useState(null);
  const [matchID, setMatchID] = React.useState(null);
  const [match, setMatch] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    if (match.players && every(match.players, (player) => player.name)) {
      history.push("/game");
    }
  }, [match, history]);

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
    setCredentials(playerCredentials);

    history.push("/lobby");
  };

  const getMatchInfo = async () => {
    const matchInfo = await lobbyClient.current.getMatch(
      "nightstand-stuff",
      matchID
    );
    setMatch(matchInfo);
  };

  const handleGetMatch = async (matchId) => {
    return await lobbyClient.current.getMatch("nightstand-stuff", matchId);
  };
  return (
    <Switch>
      <Route path="/create">
        <CreateGameScreen handleCreateGame={handleCreateGame} />
      </Route>
      <Route path="/lobby">
        <LobbyScreen
          getMatchInfo={getMatchInfo}
          match={match}
          playerID={playerID}
        />
      </Route>
      <Route path="/join">
        <JoinScreen onJoin={handleJoin} onGetMatch={handleGetMatch} />
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
