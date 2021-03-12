import * as React from "react";
import { useInterval } from "beautiful-react-hooks";
import every from "lodash/every";
import { useHistory, useParams, Redirect } from "react-router-dom";

import {
  Container,
  Button,
  MatchName,
  Player,
  Header,
  Content,
  ApiErrorMessage,
} from "./LobbyScreen.styles";

export default function LobbyScreen({ lobbyClient, storedPlayerData }) {
  const [match, setMatch] = React.useState({});
  const [error, setError] = React.useState(null);

  const { matchID, playerID } = useParams();
  const history = useHistory();

  const getMatchInfo = React.useCallback(async () => {
    try {
      const matchInfo = await lobbyClient.getMatch("nightstand-stuff", matchID);
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
      <Container>
        <Content>
          <Header>Waiting for all players to join...</Header>
          <MatchName>Match Code: {match.matchID}</MatchName>
          <Button onClick={handleCopyClick}>Copy Match Code</Button>
          {match.players.map((player) => (
            <Player key={player.id}>
              <strong>Player {player.id + 1}:</strong>{" "}
              {player.name ? player.name : "Waiting..."}
            </Player>
          ))}
          <ApiErrorMessage>{error}</ApiErrorMessage>
        </Content>
      </Container>
    );
  } else if (error) {
    return <Redirect to="/" />;
  }
  return <Container>Loading...</Container>;
}
