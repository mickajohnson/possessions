import { INVALID_MOVE } from "boardgame.io/core";

import {
  isValidChat,
  isValidMoveOne,
  isValidMoveTwo,
  isValidReact,
} from "./validations";
import { changeScore, getRelationship } from "./helpers";
import { makeId } from "../utils";

const drop = (value) => (G, _, characterKey) => {
  const currentRoom = G.characters[characterKey].location;
  G.rooms[currentRoom].drops[characterKey].push({
    value: value,
    character: characterKey,
    id: makeId(),
  });
};

export const dropNegativeOne = drop(-1);
export const dropNegativeTwo = drop(-2);

export const dropPositiveOne = drop(1);
export const dropPositiveTwo = drop(2);

export const moveOne = (G, _, characterKey, locationKey) => {
  if (isValidMoveOne(G, characterKey, locationKey)) {
    G.characters[characterKey].location = locationKey;
  } else {
    return INVALID_MOVE;
  }
};

export const moveTwo = (G, _, characterKey, locationKey) => {
  if (isValidMoveTwo(G, characterKey, locationKey)) {
    G.characters[characterKey].location = locationKey;
  } else {
    return INVALID_MOVE;
  }
};

export const react = (G, _, reactingCharKey, dropperCharKey) => {
  const characterRoomKey = G.characters[reactingCharKey].location;
  const characterRoom = G.rooms[characterRoomKey];

  if (isValidReact(G, characterRoomKey, dropperCharKey, reactingCharKey)) {
    const netEffect = characterRoom.drops[dropperCharKey].reduce(
      (combined, drop) => combined + drop.value,
      0
    );

    const relationship = getRelationship(
      G.relationships,
      dropperCharKey,
      reactingCharKey
    );

    changeScore(relationship, netEffect);

    characterRoom.drops[dropperCharKey] = [];
  } else {
    return INVALID_MOVE;
  }
};

export const bond = (G, _, characterOneKey, characterTwoKey) => {
  if (isValidChat(G, characterOneKey, characterTwoKey)) {
    const relationship = getRelationship(
      G.relationships,
      characterOneKey,
      characterTwoKey
    );

    changeScore(relationship, 1);
  } else {
    return INVALID_MOVE;
  }
};

export const fight = (
  G,
  _,
  characterOneKey,
  characterTwoKey,
  movingCharacterKey,
  destinationKey
) => {
  if (
    [characterOneKey, characterTwoKey].includes(movingCharacterKey) &&
    isValidChat(G, characterOneKey, characterTwoKey) &&
    isValidMoveOne(G, movingCharacterKey, destinationKey)
  ) {
    const relationship = getRelationship(
      G.relationships,
      characterOneKey,
      characterTwoKey
    );

    changeScore(relationship, -1);
    G.characters[movingCharacterKey].location = destinationKey;
  } else {
    return INVALID_MOVE;
  }
};
