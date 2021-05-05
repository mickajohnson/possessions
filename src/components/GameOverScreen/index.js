import * as React from "react";
import * as Types from "../../types";

import * as Styled from "./GameOverScreen.styles";
// import Relationships from "../Relationships";
// import GoalCard from "../GoalCard";

export default function GameOverScreen({ gameoverData, G }) {
  return (
    <Styled.GameOverContainer>
      <Styled.WinnerHeading>
        Winner
        <Styled.WinnerName>
          {G.players[gameoverData.winner.playerID].name}
        </Styled.WinnerName>
      </Styled.WinnerHeading>
      <Styled.PlayAgainButton to="/">Play Again</Styled.PlayAgainButton>
      <Styled.LeaderBoard>
        <Styled.LeaderBoardHeadingRow>
          <Styled.SansSeriffText as={"th"}>Rank</Styled.SansSeriffText>
          <Styled.SansSeriffText as={"th"}>Player</Styled.SansSeriffText>
          <Styled.SansSeriffText as={"th"}>Goals</Styled.SansSeriffText>
          <Styled.SansSeriffText as={"th"}>Score</Styled.SansSeriffText>
        </Styled.LeaderBoardHeadingRow>
        {gameoverData.scores.map((scoreData, index) => (
          <Styled.LeaderBoardBodyRow key={scoreData.playerID}>
            <Styled.SansSeriffText>{index + 1}</Styled.SansSeriffText>
            <Styled.SeriffText>
              {G.players[scoreData.playerID].name}
            </Styled.SeriffText>
            {/* <Styled.GoalsContainer>
              {scoreData.scoredGoals.map((goal) => (
                <Styled.GoalContainer key={goal.id}>
                  <Styled.GoalScore>Goal Score: {goal.score}</Styled.GoalScore>
                  <GoalCard goal={goal} size="small" />
                </Styled.GoalContainer>
              ))}
            </Styled.GoalsContainer> */}
            <Styled.SeriffText>Goals</Styled.SeriffText>
            <Styled.SeriffText>{scoreData.score}</Styled.SeriffText>
          </Styled.LeaderBoardBodyRow>
        ))}
      </Styled.LeaderBoard>
      {/* <Relationships relationships={G.relationships} /> */}
    </Styled.GameOverContainer>
  );
}

GameOverScreen.propTypes = {
  G: Types.G.isRequired,
  gameoverData: Types.gameoverData.isRequired,
};
