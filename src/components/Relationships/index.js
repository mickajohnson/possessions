import map from "lodash/map";

import { Container, RelationshipWrapper, Score } from "./Relationships.styles";

export default function Relationships({ relationships }) {
  return (
    <Container>
      {map(relationships, (relationshipData, relationshipKey) => (
        <RelationshipWrapper key={relationshipKey}>
          <span>{relationshipData.name}</span>
          <Score score={relationshipData.score}>
            {relationshipData.score > 0 && "+"}
            {relationshipData.score}
          </Score>
        </RelationshipWrapper>
      ))}
    </Container>
  );
}
