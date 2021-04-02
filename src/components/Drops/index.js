import map from "lodash/map";
import get from "lodash/get";

import { REACT, characterImages } from "../../constants";
import { dropClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";

import { isValidReact } from "../../game/helpers";
import {
  CharacterImage,
  Value,
  DropContainer,
  DropsContainer,
  EmptyDropGroup,
} from "./Drops.styles";

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
