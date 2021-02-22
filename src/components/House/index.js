import * as React from "react";
import styled from "styled-components";
import { EXECUTION } from "../../constants";
import { selectAction } from "../../state/board/actions";
import { useBoardState, useDispatch } from "../../state/board/reducer";

import Room from "../Room";

export default function House({ G, ctx, isActive, playerID }) {
  const { roomOrder } = G;
  const { stagedAction } = useBoardState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isActive && stagedAction === null && ctx.phase === EXECUTION) {
      dispatch(selectAction(G.players[playerID].commands[G.currentCommandKey]));
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

  // is phase = EXECUTION && isactive - do 'moveclick' of card at current command line'

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
