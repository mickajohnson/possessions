import * as React from "react";
import styled from "styled-components";

import { Container } from "./GameOverScreen.styles";

export default function GameOverScreen({ gameoverData, playerMetaData }) {
  return (
    <Container>
      {/* show end relationships */}
      <h1>Winner: {playerMetaData[gameoverData.winner.playerID].name}</h1>
      {gameoverData.scores.map((scoreData) => (
        <div key={scoreData.playerID}>
          <p>PlayerId: {scoreData.playerID}</p>
          <p>score: {scoreData.score}</p>
          <GoalsContainer>
            {scoreData.scoredGoals.map((goal) => (
              <React.Fragment key={goal.id}>
                goal score: {goal.score}
                <GoalCard>
                  <span>{goal.name}</span>
                  <span>{goal.polarity}</span>
                  <span>{goal.description}</span>
                </GoalCard>
              </React.Fragment>
            ))}
          </GoalsContainer>
        </div>
      ))}
    </Container>
  );
}

const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
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
