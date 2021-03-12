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
  FlavorText,
  Description,
  DescriptionContainer,
  PeopleContainer,
  PersonPicture,
  PersonName,
  PersonContainer,
} from "./GoalSelection.styles";

import { POSITIVE } from "../../constants";

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

  console.log(goals);

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
              selected={selectedGoalId === goal.id}
              onClick={() => handleCardClick(goal.id)}
              key={goal.id}
              selectable={isActive}
              positive={goal.polarity === POSITIVE}
            >
              <DescriptionContainer>
                <Description>{goal.description}</Description>
              </DescriptionContainer>
              <PeopleContainer>
                <PersonContainer>
                  <PersonPicture />
                  <PersonName>Grandpa</PersonName>
                </PersonContainer>
                <PersonContainer>
                  <PersonPicture />
                  <PersonName>Grandpa</PersonName>
                </PersonContainer>
              </PeopleContainer>
              <span>
                {goal.polarity === POSITIVE
                  ? "Positive Relationship"
                  : "Negative Relationship"}
              </span>
            </GoalCard>
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
