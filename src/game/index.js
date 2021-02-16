import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";

import { Relationships, Rooms, Characters } from "./gameData";
import { isValidReact, isValidMoveOne } from "./validations";

export const NightStandStuff = {
  setup: () => ({
    roomOrder: shuffle(Object.keys(Rooms)),
    rooms: Rooms,
    characters: Characters,
    relationships: Relationships,
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
