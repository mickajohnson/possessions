import * as React from "react";

import Title from "../Title";

import {
  GoalSelectionContainer,
  GoalsContainer,
  GoalCard,
  RemoveButton,
  Header,
  Content,
  Directions,
} from "./GoalSelection.styles";

export default function GoalSelection({
  goals,
  removeGoal,
  isActive,
  playerID,
  currentPlayerName,
}) {
  const [selectedGoalId, setSelectedGoalId] = React.useState(null);

  const handleConfirmClick = () => {
    if (isActive) {
      removeGoal(playerID, selectedGoalId);
    }
  };

  const handleCardClick = (goalId) => {
    if (isActive) {
      setSelectedGoalId(goalId);
    }
  };

  const direction = isActive
    ? "Select a goal to remove"
    : `Waiting${currentPlayerName ? ` on ${currentPlayerName}` : ""}...`;

  return (
    <GoalSelectionContainer>
      <Header>
        <Title fontSize="1.2em" />
      </Header>
      <Content>
        <Directions>{direction}</Directions>
        <GoalsContainer>
          {goals.map((goal) => (
            <GoalCard
              selected={selectedGoalId === goal.id}
              onClick={() => handleCardClick(goal.id)}
              key={goal.id}
            >
              <span>{goal.name}</span>
              <span>{goal.polarity}</span>
              <span>{goal.description}</span>
            </GoalCard>
          ))}
        </GoalsContainer>
        <RemoveButton onClick={handleConfirmClick}>Remove Goal</RemoveButton>
      </Content>
    </GoalSelectionContainer>
  );
}
