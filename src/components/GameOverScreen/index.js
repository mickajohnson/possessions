import * as React from "react";
import * as Types from "../../types";

import * as Styled from "./GameOverScreen.styles";
import Relationships from "../Relationships";

export default function GameOverScreen({ gameoverData, G }) {
  return (
    <Styled.GameOverContainer>
      <h1>Winner: {G.players[gameoverData.winner.playerID].name}</h1>
      {gameoverData.scores.map((scoreData) => (
        <Styled.PlayerRow key={scoreData.playerID}>
          <p>Player: {G.players[scoreData.playerID].name}</p>
          <p>score: {scoreData.score}</p>
          <Styled.GoalsContainer>
            {scoreData.scoredGoals.map((goal) => (
              <Styled.GoalContainer key={goal.id}>
                Goal Score: {goal.score}
                <Styled.GoalCard>
                  <span>{goal.name}</span>
                  <span>{goal.polarity}</span>
                  <span>{goal.description}</span>
                </Styled.GoalCard>
              </Styled.GoalContainer>
            ))}
          </Styled.GoalsContainer>
        </Styled.PlayerRow>
      ))}
      <Relationships relationships={G.relationships} />
    </Styled.GameOverContainer>
  );
}

GameOverScreen.propTypes = {
  G: Types.G.isRequired,
  gameoverData: Types.gameoverData.isRequired,
};
