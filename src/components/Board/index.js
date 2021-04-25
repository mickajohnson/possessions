import * as React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import { Provider } from "../../state/board/reducer";

import House from "../House";
import Title from "../Title";
import ActivePlayerCardArea from "../ActivePlayerCardArea";
import { GOAL_SELECTION } from "../../constants";
import GoalSelection from "../GoalSelection";
import Goals from "../Goals";
import Commands from "../Commands";
import GameOverScreen from "../GameOverScreen";
import Relationships from "../Relationships";
import Directions from "../Directions";

import * as Styled from "./Board.styles";
import * as Types from "../../types";

export default function PossessionsBoard({
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
      <Styled.BoardContainer>
        <Title padding={"10px"} fontSize="1em" />
        <Directions
          G={G}
          playerID={playerID}
          ctx={ctx}
          currentPlayerName={currentPlayerName}
          isActive={isActive}
        />
        <Styled.RoundTracker>Round {G.roundNumber} / 6</Styled.RoundTracker>
        <Styled.Sidebar>
          <Styled.SidebarSection>
            <Styled.SidebarHeading>Relationships</Styled.SidebarHeading>
            <Relationships relationships={G.relationships} />
          </Styled.SidebarSection>

          <Styled.SidebarSection>
            <Styled.SidebarHeading>Goals</Styled.SidebarHeading>
            <Goals goals={G.players[playerID].goals} />
          </Styled.SidebarSection>
        </Styled.Sidebar>

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
        <Commands
          G={G}
          playerID={playerID}
          ctx={ctx}
          currentPlayerName={currentPlayerName}
          isActive={isActive}
        />
      </Styled.BoardContainer>
    </Provider>
  );
}

PossessionsBoard.propTypes = {
  G: Types.G.isRequired,
  ctx: Types.ctx.isRequired,
  moves: Types.moves.isRequired,
  playerID: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  matchData: PropTypes.array.isRequired,
};
