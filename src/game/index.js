import shuffle from "lodash/shuffle";
import cloneDeep from "lodash/cloneDeep";

import { Relationships, Rooms, Characters, initialDrops } from "./gameData";

import {
  dropNegativeOne,
  dropPositiveOne,
  dropNegativeTwo,
  dropPositiveTwo,
  moveOne,
  moveTwo,
  fight,
  bond,
  react,
} from "./moves";

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
    dropPositiveOne,
    dropNegativeOne,
    dropNegativeTwo,
    dropPositiveTwo,
    moveOne,
    moveTwo,
    react,
    bond,
    fight,
  },
};

export default NightStandStuff;
