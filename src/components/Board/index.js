import * as React from "react";
import styled from "styled-components";
import map from "lodash/map";

import { Provider } from "../../state/board/reducer";

import House from "../House";
import BoardButtons from "../BoardButtons";

export default function NightStandStuffBoard({ G, moves }) {
  const { relationships } = G;

  return (
    <Provider>
      <Container>
        <House G={G} />
        <Relationships>
          {map(relationships, (relationshipData, relationshipKey) => (
            <RelationshipWrapper key={relationshipKey}>
              <span>{relationshipData.name}</span>
              <span>{relationshipData.score}</span>
            </RelationshipWrapper>
          ))}
        </Relationships>
        <BoardButtons moves={moves} G={G} />
      </Container>
    </Provider>
  );
}

const Container = styled.div``;

const Relationships = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  column-gap: 10px;
  row-gap: 5px;
`;

const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
