import * as React from "react";

import {
  FormContainer,
  Container,
  Input,
  Label,
  Button,
  ApiErrorMessage,
} from "./JoinScreen.styles";

export default function JoinScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [matchID, setMatchID] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleGetMatch = async () => {
    return await lobbyClient.getMatch("nightstand-stuff", matchID);
  };

  const handleJoin = async () => {
    try {
      const match = await handleGetMatch();

      const emptySeat = match.players.find((player) => !player.name);

      onJoin({
        playerID: String(emptySeat.id),
        playerName: name,
        matchID: match.matchID,
      });
    } catch {
      setMessage("match not found");
      setMatchID("");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Label htmlFor="name">Your Name</Label>
        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="matchID">Match Id</Label>
        <Input
          name="matchID"
          value={matchID}
          onChange={(e) => setMatchID(e.target.value)}
        />
        <Button
          onClick={handleJoin}
          disabled={name.length < 1 || matchID.length < 1}
        >
          Submit
        </Button>
        <ApiErrorMessage>{message}</ApiErrorMessage>
      </FormContainer>
    </Container>
  );
}
