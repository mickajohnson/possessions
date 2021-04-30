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
        <Styled.LeaderBoardRow>
          <Styled.LeaderBoardHeading>Rank</Styled.LeaderBoardHeading>
          <Styled.LeaderBoardHeading>Player</Styled.LeaderBoardHeading>
          <Styled.LeaderBoardHeading>Goals</Styled.LeaderBoardHeading>
          <Styled.LeaderBoardHeading>Score</Styled.LeaderBoardHeading>
        </Styled.LeaderBoardRow>
        {gameoverData.scores.map((scoreData, index) => (
          <Styled.LeaderBoardRow key={scoreData.playerId}>
            <Styled.Score>{index + 1}</Styled.Score>
            <Styled.Name>{G.players[scoreData.playerID].name}</Styled.Name>
            {/* <Styled.GoalsContainer>
              {scoreData.scoredGoals.map((goal) => (
                <Styled.GoalContainer key={goal.id}>
                  <Styled.GoalScore>Goal Score: {goal.score}</Styled.GoalScore>
                  <GoalCard goal={goal} size="small" />
                </Styled.GoalContainer>
              ))}
            </Styled.GoalsContainer> */}
            <Styled.Goals>Goals</Styled.Goals>
            <Styled.Score>{scoreData.score}</Styled.Score>
          </Styled.LeaderBoardRow>
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
