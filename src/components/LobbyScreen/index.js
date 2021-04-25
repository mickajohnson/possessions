import * as React from "react";
import { useInterval } from "beautiful-react-hooks";
import every from "lodash/every";
import { useHistory, useParams, Redirect } from "react-router-dom";
import * as Types from "../../types";

import * as Styled from "./LobbyScreen.styles";

export default function LobbyScreen({ lobbyClient, storedPlayerData }) {
  const [match, setMatch] = React.useState({});
  const [error, setError] = React.useState(null);

  const { matchID, playerID } = useParams();
  const history = useHistory();

  const getMatchInfo = React.useCallback(async () => {
    try {
      const matchInfo = await lobbyClient.getMatch("possessions", matchID);
      setMatch(matchInfo);
      if (error) setError(null);
    } catch {
      setError("Unable to connect to server.");
    }
  }, [error, lobbyClient, matchID]);

  React.useEffect(() => {
    if (
      storedPlayerData.matchID === matchID &&
      storedPlayerData.playerID === playerID
    ) {
      getMatchInfo();
    } else {
      history.push("/");
    }
  }, [storedPlayerData, matchID, playerID, history, getMatchInfo]);

  React.useEffect(() => {
    if (match.players && every(match.players, (player) => player.name)) {
      history.replace(`/game/${matchID}/${playerID}`);
    }
  }, [match, history, matchID, playerID]);

  useInterval(() => {
    getMatchInfo();
  }, 1000);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(match.matchID);
  };

  if (match.players) {
    return (
      <Styled.Container>
        <Styled.Content>
          <Styled.Header>Waiting for all players to join...</Styled.Header>
          <Styled.MatchName>Match Code: {match.matchID}</Styled.MatchName>
          <Styled.Button onClick={handleCopyClick}>
            Copy Match Code
          </Styled.Button>
          {match.players.map((player) => (
            <Styled.Player key={player.id}>
              <strong>Player {player.id + 1}:</strong>{" "}
              {player.name ? player.name : "Waiting..."}
            </Styled.Player>
          ))}
          <Styled.ApiErrorMessage>{error}</Styled.ApiErrorMessage>
        </Styled.Content>
      </Styled.Container>
    );
  } else if (error) {
    return <Redirect to="/" />;
  }
  return <Styled.Container>Loading...</Styled.Container>;
}

LobbyScreen.propTypes = {
  lobbyClient: Types.lobbyClient.isRequired,
  storedPlayerData: Types.storedPlayerData.isRequired,
};
