import * as React from "react";
import { NightStandStuff } from "../../game";
import NightStandStuffBoard from "../Board";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";

import { useParams, Redirect } from "react-router-dom";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

export default function GameScreen({ storedPlayerData }) {
  const { matchID, playerID } = useParams();

  if (
    !storedPlayerData.playerCredentials ||
    storedPlayerData.matchID !== matchID ||
    storedPlayerData.playerID !== playerID
  ) {
    return <Redirect to="/" />;
  }
  return (
    <GameClient
      credentials={storedPlayerData.playerCredentials}
      matchID={matchID}
      playerID={playerID}
    />
  );
}
