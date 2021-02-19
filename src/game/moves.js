import { INVALID_MOVE } from "boardgame.io/core";
import partition from "lodash/partition";

import { isValidChat, isValidMoveOne, isValidMoveTwo } from "./validations";
import { changeScore, getRelationship } from "./helpers";
import { makeId } from "../utils";

const drop = (value) => (G, _, character) => {
  const currentRoom = G.characters[character].location;
  G.rooms[currentRoom].drops.push({
    value: value,
    character: character,
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
  const characterRoom = G.rooms[G.characters[reactingCharKey].location];

  const valid =
    characterRoom.drops.some((drop) => drop.character !== reactingCharKey) &&
    characterRoom.drops.some((drop) => drop.character === dropperCharKey);

  if (valid) {
    const [relevantDrops, irrelevantDrops] = partition(
      characterRoom.drops,
      (drop) => drop.character === dropperCharKey
    );

    const netEffect = relevantDrops.reduce(
      (combined, drop) => combined + drop.value,
      0
    );

    const relationship = getRelationship(
      G.relationships,
      dropperCharKey,
      reactingCharKey
    );

    changeScore(relationship, netEffect);

    characterRoom.drops = irrelevantDrops;
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
