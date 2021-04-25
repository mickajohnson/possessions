import * as React from "react";
import PropTypes from "prop-types";
import * as Types from "../../types";

import * as Styled from "./JoinScreen.styles";

export default function JoinScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [matchID, setMatchID] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleGetMatch = async () => {
    return await lobbyClient.getMatch("possessions", matchID);
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
    <Styled.SplitContainer>
      <Styled.PinkSpace />
      <Styled.FormContainer>
        <Styled.FlavorText>Join a Game...</Styled.FlavorText>

        <Styled.Input
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Styled.Input
          name="matchID"
          placeholder="Game Code"
          value={matchID}
          onChange={(e) => setMatchID(e.target.value)}
        />
        <Styled.FormButton
          onClick={handleJoin}
          disabled={name.length < 1 || matchID.length < 1}
        >
          Join Existing Game
        </Styled.FormButton>
        <Styled.ApiErrorMessage>{message}</Styled.ApiErrorMessage>
      </Styled.FormContainer>
    </Styled.SplitContainer>
  );
}

JoinScreen.propTypes = {
  onJoin: PropTypes.func.isRequired,
  lobbyClient: Types.lobbyClient.isRequired,
};
