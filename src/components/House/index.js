import * as React from "react";
import styled from "styled-components";
import get from "lodash/get";

import { CHAT, EXECUTION, FIGHT, BOND } from "../../constants";
import { selectAction, noValidMoves } from "../../state/board/actions";
import { useBoardState, useDispatch } from "../../state/board/reducer";

import Room from "../Room";
import { every } from "lodash";
import { isChatEligible } from "../../game/validations";

export default function House({ G, ctx, isActive, playerID, skipTurn }) {
  const { roomOrder } = G;
  const { stagedAction } = useBoardState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const currentCardAction = get(
      G.players[playerID].commands[G.currentCommandKey],
      "action",
      null
    );

    if (
      isActive &&
      stagedAction === null &&
      ctx.phase === EXECUTION &&
      currentCardAction
    ) {
      dispatch(selectAction(currentCardAction));
    }
  }, [
    isActive,
    ctx.phase,
    stagedAction,
    dispatch,
    G.currentCommandKey,
    G.players,
    playerID,
  ]);

  React.useEffect(() => {
    if (
      isActive &&
      [CHAT, FIGHT, BOND].includes(stagedAction) &&
      ctx.phase === EXECUTION &&
      every(
        G.characters,
        (_, characterKey) => !isChatEligible(G.characters, characterKey)
      )
    ) {
      dispatch(noValidMoves());
      setTimeout(() => {
        skipTurn();
      }, 1500);
    }
  }, [
    isActive,
    ctx.phase,
    stagedAction,
    dispatch,
    G.currentCommandKey,
    G.players,
    G.characters,
    playerID,
    skipTurn,
  ]);

  return (
    <HouseContainer>
      {roomOrder.map((roomKey) => (
        <Room key={roomKey} roomKey={roomKey} G={G} />
      ))}
    </HouseContainer>
  );
}

const HouseContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
`;
