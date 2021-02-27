import * as React from "react";
import { useInterval } from "beautiful-react-hooks";
import every from "lodash/every";

import { useHistory } from "react-router-dom";

export default function LobbyScreen({ playerID, lobbyClient, matchID }) {
  const [match, setMatch] = React.useState({});

  const history = useHistory();

  const getMatchInfo = async () => {
    const matchInfo = await lobbyClient.getMatch("nightstand-stuff", matchID);
    setMatch(matchInfo);
  };

  React.useEffect(() => {
    if (match.players && every(match.players, (player) => player.name)) {
      history.replace("/game");
    }
  }, [match, history]);

  useInterval(() => {
    getMatchInfo();
  }, 1000);

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
