import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import map from "lodash/map";
import get from "lodash/get";

import { Provider } from "../../state/board/reducer";

import House from "../House";
import Title from "../Title";
import ActivePlayerCardArea from "../ActivePlayerCardArea";
import { GOAL_SELECTION, EXECUTION } from "../../constants";
import GoalSelection from "../GoalSelection";
import Goals from "../Goals";
import OtherPlayerCommands from "../OtherPlayerCommands";

import {
  BoardContainer,
  Relationships,
  RelationshipWrapper,
  Header,
  Sidebar,
  SidebarHeading,
  SidebarSection,
} from "./Board.styles";

export default function NightStandStuffBoard({
  G,
  moves,
  playerID,
  isActive,
  ctx,
  matchData,
}) {
  const { relationships } = G;

  const playerMetaData = React.useMemo(
    () =>
      matchData.reduce((playerData, player) => {
        playerData[player.id] = player;
        return playerData;
      }, {}),
    [matchData]
  );

  const currentPlayerData = matchData.find(
    (datum) => Number(datum.id) === Number(playerID)
  );

  if (ctx.phase === GOAL_SELECTION) {
    return (
      <BoardContainer>
        <Header>
          <span>Player {playerID} | </span>
          <span>{playerMetaData[playerID].name} | </span>
          <span>{isActive ? "Active" : "Not Active"} | </span>
          <span>Phase {ctx.phase} | </span>
          <span>Round {G.roundNumber}</span>
        </Header>
        <GoalSelection
          goals={G.players[playerID].goals}
          removeGoal={moves.removeGoal}
          isActive={isActive}
          playerID={playerID}
        />
      </BoardContainer>
    );
  }

  return (
    <Provider>
      <BoardContainer>
        <Header>
          <Title fontSize="1.2em" />
          <p>Round {G.roundNumber}</p>
        </Header>
        <Sidebar>
          <SidebarSection>
            <SidebarHeading>Relationships</SidebarHeading>
            <Relationships>
              {map(relationships, (relationshipData, relationshipKey) => (
                <RelationshipWrapper key={relationshipKey}>
                  <span>{relationshipData.name}</span>
                  <span>{relationshipData.score}</span>
                </RelationshipWrapper>
              ))}
            </Relationships>
          </SidebarSection>

          <SidebarSection>
            <SidebarHeading>Goals</SidebarHeading>
            <Goals goals={G.players[playerID].goals} />
          </SidebarSection>
        </Sidebar>

        <House
          G={G}
          isActive={isActive}
          ctx={ctx}
          playerID={playerID}
          skipTurn={moves.skipTurn}
        />

        <ActivePlayerCardArea
          playerID={playerID}
          moves={moves}
          G={G}
          ctx={ctx}
          isActive={isActive}
        />
        <OtherPlayerCommands
          G={G}
          playerID={playerID}
          ctx={ctx}
          playerMetaData={playerMetaData}
        />
      </BoardContainer>
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
