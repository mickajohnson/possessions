import map from "lodash/map";
import get from "lodash/get";
import PropTypes from "prop-types";
import * as Types from "../../types";

import { REACT, characterImages } from "../../constants";
import { dropClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";

import { isValidReact } from "../../game/helpers";
import * as Styled from "./Drops.styles";

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
    <Styled.DropContainer
      isOption={isSelected || isOption}
      borderColor={borderColor}
      onClick={handleDropGroupClick}
    >
      <Styled.CharacterImage src={characterImages[characterKey]} />
      <Styled.Value value={value}>
        {value < 1 ? value : `+${value}`}
      </Styled.Value>
    </Styled.DropContainer>
  );
}

DropGroup.propTypes = {
  dropGroup: PropTypes.arrayOf(Types.drop).isRequired,
  G: Types.G.isRequired,
  characterKey: PropTypes.string.isRequired,
  roomKey: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default function Drops({ drops, G, roomKey, isActive }) {
  return (
    <Styled.DropsContainer>
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
          <Styled.EmptyDropGroup />
        )
      )}
    </Styled.DropsContainer>
  );
}

Drops.propTypes = {
  drops: PropTypes.objectOf(PropTypes.arrayOf(Types.drop)).isRequired,
  G: Types.G.isRequired,
  roomKey: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
