import * as React from "react";

import {
  FormContainer,
  SplitContainer,
  Input,
  Select,
  FormButton,
  ApiErrorMessage,
  PinkSpace,
  FlavorText,
} from "./CreateGameScreen.styles";

export default function CreateGameScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState("");

  const handleCreateGame = async (playerName, numberOfPlayers) => {
    setError(null);
    try {
      const createMatchResponse = await lobbyClient.createMatch(
        "nightstand-stuff",
        {
          numPlayers: Number(numberOfPlayers),
        }
      );

      onJoin({
        playerID: "0",
        playerName,
        matchID: createMatchResponse.matchID,
      });
    } catch {
      setError("Unable to create game. Try again?");
    }
  };

  const buttonDisabled = name.length === 0 || !numberOfPlayers;
  return (
    <SplitContainer>
      <PinkSpace />
      <FormContainer>
        <FlavorText>Create Game...</FlavorText>
        <Input
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          name="numberOfPlayers"
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(e.target.value)}
        >
          <option disabled value="">
            Number of Players
          </option>

          {[2, 3, 4].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </Select>

        <FormButton
          disabled={buttonDisabled}
          onClick={() => handleCreateGame(name, numberOfPlayers)}
        >
          Create Game
        </FormButton>
        <ApiErrorMessage>{error}</ApiErrorMessage>
      </FormContainer>
    </SplitContainer>
  );
}
