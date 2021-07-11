import * as React from "react";
import get from "lodash/get";
import PropTypes from "prop-types";
import * as Types from "../../types";

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

import * as Styled from "./House.styles";

export default function House({ G, ctx, isActivePlayer, playerID, skipTurn }) {
  const { roomOrder } = G;
  const { stagedAction } = useBoardState();
  const dispatch = useDispatch();
  const previsActivePlayer = usePreviousValue(isActivePlayer);

  React.useEffect(() => {
    const currentCardAction = get(
      G.players[playerID].commands[G.currentCommandKey],
      "action",
      null
    );

    if (
      isActivePlayer &&
      !previsActivePlayer &&
      stagedAction === null &&
      ctx.phase === EXECUTION &&
      currentCardAction
    ) {
      dispatch(selectAction(currentCardAction));
    }
  }, [
    isActivePlayer,
    ctx.phase,
    stagedAction,
    dispatch,
    G.currentCommandKey,
    G.players,
    playerID,
    previsActivePlayer,
  ]);

  React.useEffect(() => {
    const onChatAndNoneValid =
      isActivePlayer &&
      [CHAT, FIGHT, BOND].includes(stagedAction) &&
      ctx.phase === EXECUTION &&
      every(
        G.characters,
        (_, characterKey) => !isChatEligible(G.characters, characterKey)
      );

    const onReactAndNoneValid =
      isActivePlayer &&
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
  }, [
    isActivePlayer,
    ctx.phase,
    stagedAction,
    dispatch,
    G,
    playerID,
    skipTurn,
  ]);

  return (
    <Styled.HouseContainer>
      {roomOrder.map((roomKey) => (
        <Room
          key={roomKey}
          roomKey={roomKey}
          G={G}
          isActivePlayer={isActivePlayer}
        />
      ))}
    </Styled.HouseContainer>
  );
}

House.propTypes = {
  G: Types.G.isRequired,
  ctx: Types.ctx.isRequired,
  isActivePlayer: PropTypes.bool.isRequired,
  playerID: PropTypes.string.isRequired,
  skipTurn: PropTypes.func.isRequired,
};
