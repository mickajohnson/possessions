import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

export function NightStandStuffBoard({ G: { rooms, characters, roomOrder } }) {
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
          {roomOrder.map((roomRow) =>
            roomRow.map((room) => (
              <Room key={room}>
                <Drops>
                  {rooms[room].drops.map((drop) => (
                    <Drop>
                      <span>{drop.value}</span>
                      <span>{characters[drop.character].name}</span>
                    </Drop>
                  ))}
                </Drops>
                <span>{rooms[room].name}</span>
                {roomsWithCharacters[room]
                  ? roomsWithCharacters[room].map(
                      (character) => characters[character].name
                    )
                  : null}
              </Room>
            ))
          )}
        </House>
      </table>
    </div>
  );
}

const House = styled.tbody`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Room = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

const Drops = styled.div``;

const Drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
