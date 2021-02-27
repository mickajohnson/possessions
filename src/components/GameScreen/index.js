import { NightStandStuff } from "../../game";
import NightStandStuffBoard from "../Board";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";

import { useParams } from "react-router-dom";

const GameClient = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

export default function GameScreen({ credentials }) {
  const { matchID, playerID } = useParams();

  return (
    <GameClient
      credentials={credentials}
      matchID={matchID}
      playerID={playerID}
    />
  );
}
