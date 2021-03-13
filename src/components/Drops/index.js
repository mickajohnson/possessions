import styled from "styled-components";
import map from "lodash/map";
import get from "lodash/get";

import { REACT, characterImages } from "../../constants";
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
    <DropContainer
      isOption={isSelected || isOption}
      borderColor={borderColor}
      onClick={handleDropGroupClick}
    >
      <CharacterImage src={characterImages[characterKey]} />
      <Value value={value}>{value < 1 ? value : `+${value}`}</Value>
      {/* <span>{characterKey}</span>{" "} */}
    </DropContainer>
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
        ) : (
          <EmptyDropGroup />
        )
      )}
    </DropsContainer>
  );
}

const CharacterImage = styled.img`
  width: 60%;
  position: absolute;
  left: 3px;
  top: 3px;
`;

const Value = styled.p`
  color: ${({ value }) =>
    value > 0
      ? "var(--color-green)"
      : value < 0
      ? "var(--color-redOrange)"
      : "black"};
  font-family: "Staatliches";
  width: 100%;
  text-align: right;
  font-size: 1.3rem;
  line-height: 1;s
`;

const DropsContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 0 2px;
`;

const DropContainer = styled.div`
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border-style: solid;
  border-width: ${({ isOption }) => (isOption ? "3px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  font-family: "Domine";
  font-size: 0.8rem;
  padding-right: 5px;
  padding-bottom: 2px;
  position: relative;
  height: 70%;
`;

const EmptyDropGroup = styled.div`
  padding: 5px;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border-style: solid;
  border-width: ${({ isOption }) => (isOption ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
  flex: 1;
`;
