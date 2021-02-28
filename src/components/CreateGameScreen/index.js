import * as React from "react";
import styled from "styled-components";

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
        <NameInput
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const Container = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const NameInput = styled.input`
  height: 3em;
  border-radius: 5px;
  border: none;
  margin-bottom: 3em;
  width: 100%;
  padding: 0 1em;
  font-family: "Staatliches";
`;

const Select = styled.select`
  height: 3em;
  margin-bottom: 3em;
  border-radius: 5px;
  border: none;
  padding: 0 1em;
  cursor: pointer;
  width: 100%;
  font-family: "Staatliches";
`;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  height: 2em;
  border-radius: 5px;
  font-family: "Staatliches";
  font-size: 1.5em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 2em;
`;
