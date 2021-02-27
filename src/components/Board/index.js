import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import map from "lodash/map";
import get from "lodash/get";

import { Provider } from "../../state/board/reducer";

import House from "../House";
import BoardButtons from "../BoardButtons";
import ActivePlayerCardArea from "../ActivePlayerCardArea";
import { GOAL_SELECTION } from "../../constants";
import GoalSelection from "../GoalSelection";
import Goals from "../Goals";
import OtherPlayerCommands from "../OtherPlayerCommands";

export default function NightStandStuffBoard({
  G,
  moves,
  playerID,
  isActive,
  ctx,
  matchData,
}) {
  const { relationships } = G;

  if (ctx.phase === GOAL_SELECTION) {
    return (
      <GoalSelection
        goals={G.players[playerID].goals}
        removeGoal={moves.removeGoal}
        isActive={isActive}
        playerID={playerID}
      />
    );
  }
  const currentPlayerData = matchData.find(
    (datum) => Number(datum.id) === Number(playerID)
  );

  return (
    <Provider>
      <Container>
        <span>Player {playerID} | </span>
        <span>{currentPlayerData.name} | </span>
        <span>{isActive ? "Active" : "Not Active"} | </span>
        <span>Phase {ctx.phase} | </span>
        <span>Round {G.roundNumber}</span>

        <Goals goals={G.players[playerID].goals} />

        <House
          G={G}
          isActive={isActive}
          ctx={ctx}
          playerID={playerID}
          skipTurn={moves.skipTurn}
        />

        <Relationships>
          {map(relationships, (relationshipData, relationshipKey) => (
            <RelationshipWrapper key={relationshipKey}>
              <span>{relationshipData.name}</span>
              <span>{relationshipData.score}</span>
            </RelationshipWrapper>
          ))}
        </Relationships>
        <ActivePlayerCardArea
          playerID={playerID}
          moves={moves}
          G={G}
          ctx={ctx}
          isActive={isActive}
        />
        <BoardButtons
          currentCardAction={get(
            G.players[playerID].commands[G.currentCommandKey],
            "action",
            null
          )}
          moves={moves}
          G={G}
        />
        <OtherPlayerCommands G={G} playerID={playerID} />
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
