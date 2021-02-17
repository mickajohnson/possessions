import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";
import cloneDeep from "lodash/cloneDeep";
import partition from "lodash/partition";

import { Relationships, Rooms, Characters, initialDrops } from "./gameData";
import { isValidChat, isValidMoveOne } from "./validations";
import { changeScore, getRelationship } from "./helpers";
import { makeId } from "../utils";

export const NightStandStuff = {
  setup: () => {
    const roomOrder = shuffle(Object.keys(Rooms));
    const shuffledDrops = shuffle([...initialDrops]);
    const rooms = cloneDeep(Rooms);
    roomOrder.forEach((roomKey, index) => {
      rooms[roomKey].position = index;
      if (shuffledDrops.length && index !== 4) {
        rooms[roomKey].drops.push(shuffledDrops.pop());
      }
    });

    return {
      roomOrder,
      rooms,
      characters: Characters,
      relationships: Relationships,
    };
  },

  moves: {
    dropPositiveOne: (G, _, character) => {
      const currentRoom = G.characters[character].location;
      G.rooms[currentRoom].drops.push({
        value: 1,
        character: character,
        id: makeId(),
      });
    },
    dropNegativeOne: (G, _, character) => {
      const currentRoom = G.characters[character].location;
      G.rooms[currentRoom].drops.push({
        value: -1,
        character: character,
        id: makeId(),
      });
    },
    moveOne: (G, _, characterKey, locationKey) => {
      if (isValidMoveOne(G, characterKey, locationKey)) {
        G.characters[characterKey].location = locationKey;
      } else {
        return INVALID_MOVE;
      }
    },
    react: (G, _, reactingCharKey, dropperCharKey) => {
      const characterRoom = G.rooms[G.characters[reactingCharKey].location];

      const valid =
        characterRoom.drops.some(
          (drop) => drop.character !== reactingCharKey
        ) &&
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
    },
    bond: (G, _, characterOneKey, characterTwoKey) => {
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
    },
    fight: (G, _, movingCharacterKey, characterTwoKey, destinationKey) => {
      if (
        isValidChat(G, movingCharacterKey, characterTwoKey) &&
        isValidMoveOne(G, movingCharacterKey, destinationKey)
      ) {
        const relationship = getRelationship(
          G.relationships,
          movingCharacterKey,
          characterTwoKey
        );

        changeScore(relationship, -1);
        G.characters[movingCharacterKey].location = destinationKey;
      } else {
        return INVALID_MOVE;
      }
    },
  },
};

export default NightStandStuff;
