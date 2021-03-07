import * as React from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import get from "lodash/get";

import { Provider } from "../../state/board/reducer";

import House from "../House";
import Title from "../Title";
import ActivePlayerCardArea from "../ActivePlayerCardArea";
import { GOAL_SELECTION } from "../../constants";
import GoalSelection from "../GoalSelection";
import Goals from "../Goals";
import OtherPlayerCommands from "../OtherPlayerCommands";
import GameOverScreen from "../GameOverScreen";

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
  const currentPlayerName = get(G.players, [ctx.currentPlayer, "name"], null);
  // Safety here to avoid possibility of infinite loops
  const setPlayerNameRan = React.useRef(false);

  React.useEffect(() => {
    if (
      !setPlayerNameRan.current &&
      ctx.phase === GOAL_SELECTION &&
      isActive &&
      !G.players[playerID].name
    ) {
      moves.setPlayerNames(matchData);
      setPlayerNameRan.current = true;
    }
  }, [isActive, ctx.phase, G.players, playerID, G, matchData, moves]);

  if (ctx.gameover) {
    return <GameOverScreen gameoverData={ctx.gameover} G={G} />;
  }

  if (ctx.phase === GOAL_SELECTION) {
    return (
      <GoalSelection
        goals={G.players[playerID].goals}
        removeGoal={moves.removeGoal}
        isActive={isActive}
        playerID={playerID}
        currentPlayerName={currentPlayerName}
      />
    );
  }

  return (
    <Provider>
      <BoardContainer>
        <Header>
          <Title fontSize="1.2em" />
          <p>Round {G.roundNumber} / 6</p>
        </Header>
        <Sidebar>
          <SidebarSection>
            <SidebarHeading>Relationships</SidebarHeading>
            <Relationships>
              {map(G.relationships, (relationshipData, relationshipKey) => (
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
          currentPlayerName={currentPlayerName}
          isActive={isActive}
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
