import { characterImages, POSITIVE } from "../../constants";
import * as Types from "../../types";

import * as Styled from "./GoalCard.styles";
import PropTypes from "prop-types";

export default function GoalCard({
  goal,
  onClick = () => {},
  isActive = false,
  selected = false,
  size = "large",
}) {
  const [personOne, personTwo] = goal.relationship.split("_");

  return (
    <Styled.Container
      size={size}
      selected={selected}
      onClick={() => onClick(goal.id)}
      selectable={isActive}
      positive={goal.polarity === POSITIVE}
    >
      <Styled.DescriptionContainer>
        <Styled.Description size={size}>{goal.description}</Styled.Description>
      </Styled.DescriptionContainer>
      <Styled.PeopleContainer>
        <Styled.PersonContainer>
          <Styled.PersonPicture tiltLeft src={characterImages[personOne]} />
          <Styled.PersonName size={size}>{personOne}</Styled.PersonName>
        </Styled.PersonContainer>
        <Styled.PersonContainer>
          <Styled.PersonPicture src={characterImages[personTwo]} />
          <Styled.PersonName size={size}>{personTwo}</Styled.PersonName>
        </Styled.PersonContainer>
      </Styled.PeopleContainer>
      <Styled.Polarity size={size}>
        {goal.polarity === POSITIVE
          ? "Positive Relationship"
          : "Negative Relationship"}
      </Styled.Polarity>
    </Styled.Container>
  );
}

GoalCard.propTypes = {
  goal: Types.goal.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  size: PropTypes.string,
  selected: PropTypes.bool.isRequired,
};
