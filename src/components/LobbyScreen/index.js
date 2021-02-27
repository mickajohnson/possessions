import * as React from "react";
import { useInterval } from "beautiful-react-hooks";
import every from "lodash/every";

import { useHistory, useParams } from "react-router-dom";

export default function LobbyScreen({ lobbyClient }) {
  const [match, setMatch] = React.useState({});

  const { matchID, playerID } = useParams();
  const history = useHistory();

  const getMatchInfo = async () => {
    const matchInfo = await lobbyClient.getMatch("nightstand-stuff", matchID);
    setMatch(matchInfo);
  };

  React.useEffect(() => {
    console.log(playerID);

    if (match.players && every(match.players, (player) => player.name)) {
      history.replace(`/game/${matchID}/${playerID}`);
    }
  }, [match, history, matchID, playerID]);

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
