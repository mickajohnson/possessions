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

  return (
    <GoalSelectionContainer>
      <Header>
        <Title fontSize="1.2em" />
      </Header>
      <Content>
        <Directions>Select a goal to remove</Directions>
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
