import styled from "styled-components";

import { dropClickAction } from "../Board/reducer";

export default function Drops({ drops, characters, dispatch }) {
  return (
    <DropsContainer>
      {drops.map((drop) => (
        <Drop
          onClick={() => dispatch(dropClickAction(drop.character))}
          key={drop.id}
        >
          <span>{drop.value}</span>
          <span>{characters[drop.character].name}</span>
        </Drop>
      ))}
    </DropsContainer>
  );
}

const DropsContainer = styled.div`
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
