import * as React from "react";
import styled from "styled-components";
import map from "lodash/map";

import {
  GameOverContainer,
  Relationships,
  RelationshipWrapper,
} from "./GameOverScreen.styles";

export default function GameOverScreen({ gameoverData, G }) {
  return (
    <GameOverContainer>
      {/* Make reusable? */}

      <h1>Winner: {G.players[gameoverData.winner.playerID].name}</h1>
      {gameoverData.scores.map((scoreData) => (
        <PlayerRow key={scoreData.playerID}>
          <p>Player: {G.players[scoreData.playerID].name}</p>
          <p>score: {scoreData.score}</p>
          <GoalsContainer>
            {scoreData.scoredGoals.map((goal) => (
              <GoalContainer key={goal.id}>
                Goal Score: {goal.score}
                <GoalCard>
                  <span>{goal.name}</span>
                  <span>{goal.polarity}</span>
                  <span>{goal.description}</span>
                </GoalCard>
              </GoalContainer>
            ))}
          </GoalsContainer>
        </PlayerRow>
      ))}
      <Relationships>
        {map(G.relationships, (relationshipData, relationshipKey) => (
          <RelationshipWrapper key={relationshipKey}>
            <span>{relationshipData.name}</span>
            <span>{relationshipData.score}</span>
          </RelationshipWrapper>
        ))}
      </Relationships>
    </GameOverContainer>
  );
}

const GoalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerRow = styled.div`
  display: flex;
  margin-bottom: 25px;
  width: 75%;
`;

const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

const GoalCard = styled.div`
  height: 120px;
  width: 80px;
  font-size: 14px;
  background-color: white;
  boarder-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
`;
