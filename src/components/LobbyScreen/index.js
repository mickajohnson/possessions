import * as React from "react";
import { useInterval } from "beautiful-react-hooks";
import every from "lodash/every";
import { useHistory, useParams } from "react-router-dom";

import {
  Container,
  Button,
  MatchName,
  Player,
  Header,
  FormContainer,
} from "./LobbyScreen.styles";

export default function LobbyScreen({ lobbyClient, storedPlayerData }) {
  const [match, setMatch] = React.useState({});

  const { matchID, playerID } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    if (
      storedPlayerData.matchID === matchID &&
      storedPlayerData.playerID === playerID
    ) {
      getMatchInfo();
    } else {
      history.push("/");
    }
  }, [storedPlayerData, matchID, playerID]);

  const getMatchInfo = async () => {
    const matchInfo = await lobbyClient.getMatch("nightstand-stuff", matchID);
    setMatch(matchInfo);
  };

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
        <FormContainer>
          <Header>Waiting for all players to join...</Header>
          <MatchName>Match ID: {match.matchID}</MatchName>
          <Button onClick={handleCopyClick}>Copy Match ID</Button>
          {match.players.map((player) => (
            <Player key={player.id}>
              Player {player.id + 1}: {player.name ? player.name : "Waiting..."}{" "}
              {String(playerID) === String(player.id) ? "(you)" : ""}
            </Player>
          ))}
        </FormContainer>
      </Container>
    );
  }
  return <Container>Loading...</Container>;
}
