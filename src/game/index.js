import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";
import cloneDeep from "lodash/cloneDeep";

import { Relationships, Rooms, Characters, initialDrops } from "./gameData";
import { isValidReact, isValidMoveOne } from "./validations";

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
      G.rooms[currentRoom].drops.push({ value: 1, character: character });
    },
    dropNegativeOne: (G, _, character) => {
      const currentRoom = G.characters[character].location;
      G.rooms[currentRoom].drops.push({ value: -1, character: character });
    },
    moveOne: (G, _, characterKey, locationKey) => {
      if (isValidMoveOne(G, characterKey, locationKey)) {
        G.characters[characterKey].location = locationKey;
      } else {
        return INVALID_MOVE;
      }
    },
    react: (G, _, characterKey) => {
      if (isValidReact(G, characterKey)) {
        console.log("yay");
      } else {
        return INVALID_MOVE;
      }
    },
  },
};

export default NightStandStuff;
