import { characterImages, POSITIVE } from "../../constants";
import * as Types from "../../types";

import * as Styled from "./ScoredGoalCard.styles";

export default function GoalCard({ goal }) {
  const [personOne, personTwo] = goal.relationship.split("_");

  return (
    <Styled.Container positive={goal.polarity === POSITIVE}>
      <Styled.DescriptionContainer>
        {goal.score < 1 ? (
          <Styled.RedX>X</Styled.RedX>
        ) : (
          <Styled.Score>{goal.score}</Styled.Score>
        )}
      </Styled.DescriptionContainer>
      <Styled.PeopleContainer>
        <Styled.PersonContainer>
          <Styled.PersonPicture tiltLeft src={characterImages[personOne]} />
        </Styled.PersonContainer>
        <Styled.PersonContainer>
          <Styled.PersonPicture src={characterImages[personTwo]} />
        </Styled.PersonContainer>
      </Styled.PeopleContainer>
    </Styled.Container>
  );
}

GoalCard.propTypes = {
  goal: Types.goalWithScore.isRequired,
};
