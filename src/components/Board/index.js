import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import map from "lodash/map";

import { Provider } from "../../state/board/reducer";

import House from "../House";
// import BoardButtons from "../BoardButtons";
import ActivePlayerCardArea from "../ActivePlayerCardArea";

export default function NightStandStuffBoard({ G, moves, playerID, isActive }) {
  const { relationships } = G;

  return (
    <Provider>
      <Container>
        <span>Player {playerID} </span>
        <span>{isActive ? "Active" : "Not Active"}</span>
        <House G={G} />
        <Relationships>
          {map(relationships, (relationshipData, relationshipKey) => (
            <RelationshipWrapper key={relationshipKey}>
              <span>{relationshipData.name}</span>
              <span>{relationshipData.score}</span>
            </RelationshipWrapper>
          ))}
        </Relationships>
        <ActivePlayerCardArea
          playerKey={playerID}
          moves={moves}
          playerInfo={G.players[playerID]}
        />
        {/* <BoardButtons moves={moves} G={G} /> */}
      </Container>
    </Provider>
  );
}

NightStandStuffBoard.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  playerID: PropTypes.string,
  isActive: PropTypes.bool,
  isMultiplayer: PropTypes.bool,
};

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
