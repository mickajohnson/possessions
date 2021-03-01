import * as React from "react";

import {
  FormContainer,
  Container,
  Input,
  Label,
  Select,
  Button,
} from "./CreateGameScreen.styles";

export default function CreateGameScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [numberOfPlayers, setNumberOfPlayers] = React.useState("2");

  const handleCreateGame = async (playerName, numberOfPlayers) => {
    const createMatchResponse = await lobbyClient.createMatch(
      "nightstand-stuff",
      {
        numPlayers: Number(numberOfPlayers),
      }
    );

    onJoin({ playerID: "0", playerName, matchID: createMatchResponse.matchID });
  };

  const buttonDisabled = name.length === 0 || !numberOfPlayers;
  return (
    <Container>
      <FormContainer>
        <Label htmlFor="name">Your Name</Label>
        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="numberOfPlayers">Number of Players</Label>
        <Select
          name="numberOfPlayers"
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(e.target.value)}
        >
          {[2, 3, 4].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </Select>

        <Button
          disabled={buttonDisabled}
          onClick={() => handleCreateGame(name, numberOfPlayers)}
        >
          Create Game
        </Button>
      </FormContainer>
    </Container>
  );
}
