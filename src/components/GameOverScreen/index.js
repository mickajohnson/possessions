import * as React from "react";
import * as Types from "../../types";

import * as Styled from "./GameOverScreen.styles";
// import Relationships from "../Relationships";
import GoalCard from "../GoalCard";

export default function GameOverScreen({ gameoverData, G }) {
  return (
    <Styled.GameOverContainer>
      <Styled.WinnerHeading>
        Winner
        <Styled.WinnerName>
          {G.players[gameoverData.winner.playerID].name}
        </Styled.WinnerName>
      </Styled.WinnerHeading>
      <Styled.LeaderBoard>
        {gameoverData.scores.map((scoreData, index) => (
          <Styled.PlayerRow key={scoreData.playerID}>
            <Styled.PlayerText>
              <p>
                <Styled.Rank>{index + 1}.</Styled.Rank>{" "}
                {G.players[scoreData.playerID].name}
              </p>
              <p>Score: {scoreData.score}</p>
            </Styled.PlayerText>
            <Styled.GoalsContainer>
              {scoreData.scoredGoals.map((goal) => (
                <Styled.GoalContainer key={goal.id}>
                  <Styled.GoalScore>Goal Score: {goal.score}</Styled.GoalScore>
                  <GoalCard goal={goal} size="small" />
                </Styled.GoalContainer>
              ))}
            </Styled.GoalsContainer>
          </Styled.PlayerRow>
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
