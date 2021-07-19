import * as React from "react";
import reduce from "lodash/reduce";
import PropTypes from "prop-types";
import * as Types from "../../types";

import { isValidMoveOne, isValidMoveTwo } from "../../game/helpers";
import { MOVE_ONE, MOVE_TWO, FIGHT, SELECT_ROOM } from "../../constants";
import { roomClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";
import Drops from "../Drops";
import Character from "../Character";

import * as Styled from "./Room.styles";

export default function Room({ roomKey, G, isActivePlayer }) {
  const dispatch = useDispatch();

  const { stagedAction, selectedRoom, selectedCharacter, phase } =
    useBoardState();

  const { roomOrder, characters, rooms } = G;

  const roomsWithCharacters = React.useMemo(
    () =>
      reduce(
        characters,
        (roomData, characterData, character) => {
          (
            roomData[characterData.location] ||
            (roomData[characterData.location] = [])
          ).push(character);

          return roomData;
        },
        {}
      ),
    [characters]
  );

  const isMoveOneOption =
    stagedAction === MOVE_ONE &&
    phase === SELECT_ROOM &&
    isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey);

  const isFightAfterOption =
    stagedAction === FIGHT &&
    phase === SELECT_ROOM &&
    isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey);

  const isMoveTwoOption =
    stagedAction === MOVE_TWO &&
    phase === SELECT_ROOM &&
    isValidMoveTwo({ roomOrder, characters }, selectedCharacter, roomKey);

  const isOption =
    isActivePlayer &&
    (isMoveOneOption || isMoveTwoOption || isFightAfterOption);

  let borderColor = null;

  if (selectedRoom === roomKey) {
    borderColor = "var(--color-green)";
  } else if (isOption) {
    borderColor = "var(--color-yellow)";
  }

  const handleRoomClick = () => {
    if (isOption) {
      dispatch(roomClickAction(roomKey));
    }
  };

  return (
    <Styled.RoomContainer
      isOption={isOption}
      borderColor={borderColor}
      onClick={handleRoomClick}
      roomKey={roomKey}
    >
      <Styled.RoomName roomKey={roomKey}>{rooms[roomKey].name}</Styled.RoomName>
      <Styled.CharactersContainer>
        {roomsWithCharacters[roomKey]
          ? roomsWithCharacters[roomKey].map((characterKey) => (
              <Character
                key={characterKey}
                characterKey={characterKey}
                dispatch={dispatch}
                G={G}
                isActivePlayer={isActivePlayer}
              />
            ))
          : null}
      </Styled.CharactersContainer>
      <Drops
        dispatch={dispatch}
        drops={rooms[roomKey].drops}
        G={G}
        roomKey={roomKey}
        isActivePlayer={isActivePlayer}
      />
    </Styled.RoomContainer>
  );
}

Room.propTypes = {
  G: Types.G.isRequired,
  roomKey: PropTypes.string.isRequired,
  isActivePlayer: PropTypes.bool.isRequired,
};
