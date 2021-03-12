import { characterImages, POSITIVE } from "../../constants";

import {
  DescriptionContainer,
  Description,
  PeopleContainer,
  PersonContainer,
  PersonName,
  PersonPicture,
  Container,
  Polarity,
} from "./GoalCard.styles";

export default function GoalCard({
  goal,
  onClick = () => {},
  isActive = false,
  selected = false,
  size = "large",
}) {
  const [personOne, personTwo] = goal.relationship.split("_");

  return (
    <Container
      size={size}
      selected={selected}
      onClick={() => onClick(goal.id)}
      selectable={isActive}
      positive={goal.polarity === POSITIVE}
    >
      <DescriptionContainer>
        <Description size={size}>{goal.description}</Description>
      </DescriptionContainer>
      <PeopleContainer>
        <PersonContainer>
          <PersonPicture tiltLeft src={characterImages[personOne]} />
          <PersonName size={size}>{personOne}</PersonName>
        </PersonContainer>
        <PersonContainer>
          <PersonPicture src={characterImages[personTwo]} />
          <PersonName size={size}>{personTwo}</PersonName>
        </PersonContainer>
      </PeopleContainer>
      <Polarity size={size}>
        {goal.polarity === POSITIVE
          ? "Positive Relationship"
          : "Negative Relationship"}
      </Polarity>
    </Container>
  );
}
