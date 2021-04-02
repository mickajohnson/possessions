import * as React from "react";

import Title from "../Title";

import {
  GoalSelectionContainer,
  GoalsContainer,
  RemoveButton,
  Header,
  Content,
  Directions,
  FlavorText,
} from "./GoalSelection.styles";
import GoalCard from "../GoalCard";

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
    ? "Select 1 Card to Remove"
    : `Waiting${currentPlayerName ? ` on ${currentPlayerName}` : ""}...`;

  return (
    <GoalSelectionContainer>
      <Header>
        <Title fontSize="1.2em" />
      </Header>
      <Content>
        <FlavorText>Time to choose your destiny...</FlavorText>
        <Directions>{direction}</Directions>
        <GoalsContainer>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onClick={handleCardClick}
              isActive={isActive}
              selected={selectedGoalId === goal.id}
            />
          ))}
        </GoalsContainer>
        {isActive ? (
          <RemoveButton disabled={!selectedGoalId} onClick={handleConfirmClick}>
            Confirm Removal
          </RemoveButton>
        ) : null}
      </Content>
    </GoalSelectionContainer>
  );
}
