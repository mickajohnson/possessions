import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";
import cloneDeep from "lodash/cloneDeep";
import partition from "lodash/partition";

import { Relationships, Rooms, Characters, initialDrops } from "./gameData";
import { isValidReact, isValidMoveOne } from "./validations";
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

        G.relationships[
          `${reactingCharKey}${dropperCharKey}`
        ].score += netEffect;

        characterRoom.drops = irrelevantDrops;
      } else {
        return INVALID_MOVE;
      }
    },
  },
};

export default NightStandStuff;
