import * as React from "react";
import { Possessions } from "../../game";
import PossessionsBoard from "../Board";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import PropTypes from "prop-types";

import { useParams, Redirect } from "react-router-dom";

const { protocol, hostname, port } = window.location;
const server =
  process.env.NODE_ENV === "development"
    ? "localhost:8000"
    : `${protocol}//${hostname}:${port}`;

const GameClient = Client({
  game: Possessions,
  board: PossessionsBoard,
  multiplayer: SocketIO({ server }),
  debug: false,
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
