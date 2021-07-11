import * as React from "react";
import * as Types from "../../types";

import Title from "../Title";

import * as Styled from "./GoalSelection.styles";
import GoalCard from "../GoalCard";
import PropTypes from "prop-types";

export default function GoalSelection({
  goals,
  removeGoal,
  isActivePlayer,
  playerID,
  currentPlayerName,
}) {
  const [selectedGoalId, setSelectedGoalId] = React.useState(null);

  const handleConfirmClick = () => {
    if (isActivePlayer) {
      removeGoal(playerID, selectedGoalId);
    }
  };

  const handleCardClick = (goalId) => {
    if (isActivePlayer) {
      setSelectedGoalId(goalId);
    }
  };

  const direction = isActivePlayer
    ? "Select 1 Card to Remove"
    : `Waiting${currentPlayerName ? ` on ${currentPlayerName}` : ""}...`;

  return (
    <Styled.GoalSelectionContainer>
      <Styled.Header>
        <Title fontSize="1.2em" />
      </Styled.Header>
      <Styled.Content>
        <Styled.FlavorText>Time to choose your destiny...</Styled.FlavorText>
        <Styled.Directions>{direction}</Styled.Directions>
        <Styled.GoalsContainer>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onClick={handleCardClick}
              isActivePlayer={isActivePlayer}
              selected={selectedGoalId === goal.id}
            />
          ))}
        </Styled.GoalsContainer>
        {isActivePlayer ? (
          <Styled.RemoveButton
            disabled={!selectedGoalId}
            onClick={handleConfirmClick}
          >
            Confirm Removal
          </Styled.RemoveButton>
        ) : null}
      </Styled.Content>
    </Styled.GoalSelectionContainer>
  );
}

GoalSelection.propTypes = {
  goals: PropTypes.arrayOf(Types.goal).isRequired,
  removeGoal: PropTypes.func.isRequired,
  isActivePlayer: PropTypes.bool.isRequired,
  playerID: PropTypes.string.isRequired,
  currentPlayerName: PropTypes.string.isRequired,
};
