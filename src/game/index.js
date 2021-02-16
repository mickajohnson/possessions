import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";

import { ROOMS, CHARACTERS } from "../constants";
import { isValidMoveOne } from "./gameData";

export const NightStandStuff = {
  setup: () => ({
    roomOrder: shuffle(Object.keys(ROOMS)),
    rooms: ROOMS,
    characters: CHARACTERS,
  }),

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
  },
};

export default NightStandStuff;
