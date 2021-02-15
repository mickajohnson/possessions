import React from "react";
import styled from "styled-components";

export function NightStandStuffBoard({ G }) {
  // onClick(id) {
  //   this.props.moves.clickCell(id);
  // }

  return (
    <div>
      <table id="board">
        <House>
          {G.roomOrder.map((roomRow) =>
            roomRow.map((room) => (
              <Room key={room}>
                <span>{G.rooms[room].displayName}</span>
                {G.rooms[room].characters.map((character) => (
                  <span>{character}</span>
                ))}
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
