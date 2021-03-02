import * as React from "react";
import styled from "styled-components";

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
    <Container>
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
      <button onClick={handleConfirmClick}>Remove Goal</button>
    </Container>
  );
}

const Container = styled.div``;

const GoalsContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const GoalCard = styled.div`
  height: 12em;
  width: 8em;
  border: 1px solid;
  border-color: ${({ selected }) => (selected ? "blue" : "black")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
