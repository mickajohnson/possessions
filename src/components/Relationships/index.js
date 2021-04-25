import map from "lodash/map";
import PropTypes from "prop-types";
import * as Types from "../../types";

import * as Styled from "./Relationships.styles";

export default function Relationships({ relationships }) {
  return (
    <Styled.Container>
      {map(relationships, (relationshipData, relationshipKey) => (
        <Styled.RelationshipWrapper key={relationshipKey}>
          <span>{relationshipData.name}</span>
          <Styled.Score score={relationshipData.score}>
            {relationshipData.score > 0 && "+"}
            {relationshipData.score}
          </Styled.Score>
        </Styled.RelationshipWrapper>
      ))}
    </Styled.Container>
  );
}

Relationships.propTypes = {
  relationships: PropTypes.objectOf(Types.relationship).isRequired,
};
