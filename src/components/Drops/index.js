import styled from "styled-components";
import map from "lodash/map";

import { dropClickAction, REACT } from "../Board/reducer";

function Drop({ drop, characters, state, dispatch }) {
  const { stagedAction, dropperCharacter, selectedCharacter } = state;

  const isOption = selectedCharacter && stagedAction === REACT;
  const isSelected = dropperCharacter === drop.character;

  let borderColor = "black";
  if (isSelected) {
    borderColor = "green";
  } else if (isOption) {
    borderColor = "blue";
  }
  console.log("drop", dropperCharacter, drop.character, borderColor);

  return (
    <DropContainer
      borderColor={borderColor}
      onClick={() => dispatch(dropClickAction(drop.character))}
      key={drop.id}
    >
      <span>{drop.value}</span>
      <span>{characters[drop.character].name}</span>
    </DropContainer>
  );
}

function DropGroup({ dropGroup, dispatch, characters, state }) {
  return (
    <div>
      {dropGroup.map((drop) => (
        <Drop
          key={drop.id}
          drop={drop}
          dispatch={dispatch}
          characters={characters}
          state={state}
        ></Drop>
      ))}
    </div>
  );
}

export default function Drops({ drops, characters, dispatch, state }) {
  return (
    <DropsContainer>
      {map(drops, (dropGroup, characterKey) => (
        <DropGroup
          key={dropGroup.id}
          drop={dropGroup}
          dispatch={dispatch}
          characters={characters}
          state={state}
        />
      ))}
    </DropsContainer>
  );
}

const DropsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
`;
