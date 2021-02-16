import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

import { isValidMoveOne } from "../../game/gameData";

export const MOVE_ONE = "MOVE_ONE";

export default function NightStandStuffBoard({
  G: { rooms, characters, roomOrder },
  moves,
}) {
  const [memo, setMemo] = React.useState("");

  const handleMoveClick = () => {
    setMemo("Select a character");
    setStagedAction(MOVE_ONE);
  };

  const handleCharacterClick = (character) => {
    if (stagedAction === MOVE_ONE) {
      setMemo(`Where should ${character} go?`);
      setSelectedCharacter(character);
    }
  };

  const handleRoomClick = (room) => {
    if (stagedAction === MOVE_ONE && selectedCharacter) {
      setMemo(`${selectedCharacter} to ${room}?`);
      setSelectedRoom(room);
    }
  };

  const handleCancelClick = () => {
    setMemo("");
    setStagedAction(null);
    setSelectedRoom(null);
    setSelectedCharacter(null);
  };

  const handleConfirmClick = () => {
    if (stagedAction === MOVE_ONE && selectedRoom && selectedCharacter) {
      moves.moveOne(selectedCharacter, selectedRoom);
      handleCancelClick();
    }
  };

  const [stagedAction, setStagedAction] = React.useState(null);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [selectedRoom, setSelectedRoom] = React.useState(null);

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

  return (
    <div>
      <table id="board">
        <House>
          {roomOrder.map((room) => (
            <Room
              key={room}
              option={
                stagedAction === MOVE_ONE &&
                selectedCharacter &&
                (selectedRoom === null || selectedRoom === room) &&
                isValidMoveOne(
                  { roomOrder, characters },
                  selectedCharacter,
                  room
                )
              }
              selected={selectedRoom === room}
              onClick={() => handleRoomClick(room)}
            >
              {rooms[room].drops.length ? (
                <Drops>
                  {rooms[room].drops.map((drop) => (
                    <Drop>
                      <span>{drop.value}</span>
                      <span>{characters[drop.character].name}</span>
                    </Drop>
                  ))}
                </Drops>
              ) : null}
              <span>{rooms[room].name}</span>
              {roomsWithCharacters[room]
                ? roomsWithCharacters[room].map((character) => (
                    <Character
                      onClick={() => handleCharacterClick(character)}
                      showBorder={
                        stagedAction === MOVE_ONE &&
                        (selectedCharacter === null ||
                          selectedCharacter === character)
                      }
                      selected={selectedCharacter === character}
                    >
                      {characters[character].name}
                    </Character>
                  ))
                : null}
            </Room>
          ))}
        </House>
      </table>
      <button onClick={handleMoveClick}>Move 1</button>
      {stagedAction !== null ? (
        <button onClick={handleCancelClick}>Cancel</button>
      ) : null}
      {stagedAction !== null ? (
        <button onClick={handleConfirmClick}>Confirm</button>
      ) : null}
      <p>{memo}</p>
    </div>
  );
}

const House = styled.tbody`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const Room = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-color: ${({ selected, option }) =>
    selected ? "green" : option ? "blue" : "black"};
`;

const Drops = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Character = styled.div`
  border-style: solid;
  border-width: ${({ showBorder }) => (showBorder ? "1px" : "0px")};
  border-color: ${({ selected }) => (selected ? "green" : "blue")};
`;
