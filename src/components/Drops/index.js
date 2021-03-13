import styled from "styled-components";
import map from "lodash/map";
import get from "lodash/get";

import { REACT } from "../../constants";
import { dropClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";

import { isValidReact } from "../../game/validations";

function DropGroup({ dropGroup, G, characterKey, roomKey, isActive }) {
  const dispatch = useDispatch();
  const { stagedAction, dropperCharacter, selectedCharacter } = useBoardState();

  const { characters } = G;

  const reactingCharRoomKey = get(
    characters,
    [selectedCharacter, "location"],
    null
  );

  const isOption =
    selectedCharacter &&
    stagedAction === REACT &&
    roomKey === reactingCharRoomKey &&
    isValidReact(G, reactingCharRoomKey, characterKey, selectedCharacter) &&
    isActive;

  const isSelected = isOption && dropperCharacter === characterKey;

  const borderColor = isSelected ? "var(--color-green)" : "var(--color-blue)";

  const handleDropGroupClick = (e) => {
    if (isOption) {
      e.stopPropagation();
      dispatch(dropClickAction(characterKey));
    }
  };

  const value = dropGroup.reduce((accum, drop) => accum + drop.value, 0);

  return (
    <DropGroupContainer
      isOption={isSelected || isOption}
      borderColor={borderColor}
      onClick={handleDropGroupClick}
    >
      <DropContainer>
        <span>{value < 1 ? value : `+${value}`}</span>
        <span>{characterKey}</span>
      </DropContainer>
    </DropGroupContainer>
  );
}

export default function Drops({ drops, G, roomKey, isActive }) {
  return (
    <DropsContainer>
      {map(drops, (dropGroup, characterKey) =>
        dropGroup.length ? (
          <DropGroup
            key={characterKey}
            characterKey={characterKey}
            dropGroup={dropGroup}
            G={G}
            roomKey={roomKey}
            isActive={isActive}
          />
        ) : null
      )}
    </DropsContainer>
  );
}

const DropsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

const DropGroupContainer = styled.div`
  padding: 5px;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border-style: solid;
  border-width: ${({ isOption }) => (isOption ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
`;

const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  background-color: white;
  font-family: "Domine";
  font-size: 0.8rem;
  padding: 2px;
`;
