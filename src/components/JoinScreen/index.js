import * as React from "react";

import {
  FormContainer,
  SplitContainer,
  Input,
  FlavorText,
  FormButton,
  ApiErrorMessage,
  PinkSpace,
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
    <SplitContainer>
      <PinkSpace />
      <FormContainer>
        <FlavorText>Join a Game...</FlavorText>

        <Input
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="matchID"
          placeholder="Game Code"
          value={matchID}
          onChange={(e) => setMatchID(e.target.value)}
        />
        <FormButton
          onClick={handleJoin}
          disabled={name.length < 1 || matchID.length < 1}
        >
          Join Existing Game
        </FormButton>
        <ApiErrorMessage>{message}</ApiErrorMessage>
      </FormContainer>
    </SplitContainer>
  );
}
