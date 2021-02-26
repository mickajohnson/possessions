import * as React from "react";
import { useInterval } from "beautiful-react-hooks";

export default function LobbyScreen({ getMatchInfo, match, playerID }) {
  useInterval(() => {
    getMatchInfo();
  }, 1000);

  console.log(match);

  if (match.players) {
    return (
      <div>
        <h1>{match.matchID}</h1>
        {match.players.map((player) => (
          <div key={player.id}>
            Player: {player.name} {player.id}{" "}
            {String(playerID) === String(player.id) ? "(you)" : ""}
          </div>
        ))}
      </div>
    );
  }
  return <div>Loading...</div>;
}
