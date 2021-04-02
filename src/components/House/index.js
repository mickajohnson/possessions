import * as React from "react";
import styled from "styled-components";
import get from "lodash/get";

import { CHAT, EXECUTION, FIGHT, BOND, REACT } from "../../constants";
import {
  selectAction,
  noValidMoves,
  resetAction,
} from "../../state/board/actions";
import { useBoardState, useDispatch } from "../../state/board/reducer";

import Room from "../Room";
import { every } from "lodash";
import { isChatEligible, isReactEligible } from "../../game/helpers";
import { usePreviousValue } from "beautiful-react-hooks";

export default function House({ G, ctx, isActive, playerID, skipTurn }) {
  const { roomOrder } = G;
  const { stagedAction } = useBoardState();
  const dispatch = useDispatch();
  const prevIsActive = usePreviousValue(isActive);

  React.useEffect(() => {
    const currentCardAction = get(
      G.players[playerID].commands[G.currentCommandKey],
      "action",
      null
    );

    if (
      isActive &&
      !prevIsActive &&
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
    prevIsActive,
  ]);

  React.useEffect(() => {
    const onChatAndNoneValid =
      isActive &&
      [CHAT, FIGHT, BOND].includes(stagedAction) &&
      ctx.phase === EXECUTION &&
      every(
        G.characters,
        (_, characterKey) => !isChatEligible(G.characters, characterKey)
      );

    const onReactAndNoneValid =
      isActive &&
      stagedAction === REACT &&
      ctx.phase === EXECUTION &&
      every(
        G.characters,
        (_, characterKey) => !isReactEligible(G, characterKey)
      );

    if (onChatAndNoneValid || onReactAndNoneValid) {
      dispatch(noValidMoves());
      setTimeout(() => {
        skipTurn();
        dispatch(resetAction);
      }, 1500);
    }
  }, [isActive, ctx.phase, stagedAction, dispatch, G, playerID, skipTurn]);

  return (
    <HouseContainer>
      {roomOrder.map((roomKey) => (
        <Room key={roomKey} roomKey={roomKey} G={G} isActive={isActive} />
      ))}
    </HouseContainer>
  );
}

const HouseContainer = styled.div`
  grid-area: main;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 2em 2em 2em;
`;
