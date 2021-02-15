import React from "react";
import styled from "styled-components";

export class NightStandStuffBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = "";
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    // let tbody = [];
    // for (let i = 0; i < 3; i++) {
    //   let cells = [];
    //   for (let j = 0; j < 3; j++) {
    //     const id = 3 * i + j;
    //     cells.push(
    //       <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
    //         {this.props.G.cells[id]}
    //       </td>
    //     );
    //   }
    //   tbody.push(<tr key={i}>{cells}</tr>);
    // }

    return (
      <div>
        <table id="board">
          <House>
            {this.props.G.roomOrder.map((room) => (
              <Room key={room.displayName}>
                <span>{room.displayName}</span>
                {room.characters.map((character) => (
                  <span>{character}</span>
                ))}
              </Room>
            ))}
          </House>
        </table>
        {winner}
      </div>
    );
  }
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
