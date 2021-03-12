import { characterImages, POSITIVE } from "../../constants";

import {
  DescriptionContainer,
  Description,
  PeopleContainer,
  PersonContainer,
  PersonName,
  PersonPicture,
  Container,
} from "./GoalCard.styles";

export default function GoalCard({
  goal,
  onClick = () => {},
  isActive = false,
  selected = false,
}) {
  console.log(goal);

  const [personOne, personTwo] = goal.relationship.split("_");

  return (
    <Container
      selected={selected}
      onClick={() => onClick(goal.id)}
      selectable={isActive}
      positive={goal.polarity === POSITIVE}
    >
      <DescriptionContainer>
        <Description>{goal.description}</Description>
      </DescriptionContainer>
      <PeopleContainer>
        <PersonContainer>
          <PersonPicture tiltLeft src={characterImages[personOne]} />
          <PersonName>{personOne}</PersonName>
        </PersonContainer>
        <PersonContainer>
          <PersonPicture src={characterImages[personTwo]} />
          <PersonName>{personTwo}</PersonName>
        </PersonContainer>
      </PeopleContainer>
      <span>
        {goal.polarity === POSITIVE
          ? "Positive Relationship"
          : "Negative Relationship"}
      </span>
    </Container>
  );
}
