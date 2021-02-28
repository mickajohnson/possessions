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
import { isChatEligible, isReactEligible } from "../../game/validations";

export default function House({ G, ctx, isActive, playerID, skipTurn }) {
  const { roomOrder } = G;
  const { stagedAction } = useBoardState();
  const dispatch = useDispatch();

  console.log(
    "outside",
    G.currentCommandKey,
    G.players[playerID].commands,
    isActive,
    stagedAction === null,
    ctx.phase === EXECUTION
  );

  // somehow isactive true while G is still out of date, but how is that possible when command line shows empty slot?
  // Is it happening at end of turn???

  React.useEffect(() => {
    const currentCardAction = get(
      G.players[playerID].commands[G.currentCommandKey],
      "action",
      null
    );

    console.log(
      "ff",
      G.currentCommandKey,
      G.players[playerID].commands,
      currentCardAction,
      isActive,
      stagedAction === null,
      ctx.phase === EXECUTION,
      currentCardAction
    );

    if (
      isActive &&
      stagedAction === null &&
      ctx.phase === EXECUTION &&
      currentCardAction
    ) {
      dispatch(selectAction(currentCardAction));
    }
  }, [isActive, ctx.phase, stagedAction, dispatch, G, playerID]);

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
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
`;
