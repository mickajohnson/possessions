import * as React from "react";
import PropTypes from "prop-types";
import * as Types from "../../types";
import * as Styled from "./CreateGameScreen.styles";

export default function CreateGameScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState("");

  const handleCreateGame = async (playerName, numberOfPlayers) => {
    setError(null);
    try {
      const createMatchResponse = await lobbyClient.createMatch("possessions", {
        numPlayers: Number(numberOfPlayers),
      });

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
    <Styled.SplitContainer>
      <Styled.PinkSpace />
      <Styled.FormContainer>
        <Styled.FlavorText>Create Game...</Styled.FlavorText>
        <Styled.Input
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Styled.Select
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
        </Styled.Select>

        <Styled.FormButton
          disabled={buttonDisabled}
          onClick={() => handleCreateGame(name, numberOfPlayers)}
        >
          Create Game
        </Styled.FormButton>
        <Styled.ApiErrorMessage>{error}</Styled.ApiErrorMessage>
      </Styled.FormContainer>
    </Styled.SplitContainer>
  );
}

CreateGameScreen.propTypes = {
  onJoin: PropTypes.func.isRequired,
  lobbyClient: Types.G.isRequired,
};
