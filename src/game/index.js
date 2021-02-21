import setup from "./setup";
import { EXECUTION, PLANNING } from "../constants";

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
  setup,
  phases: {
    [PLANNING]: {
      moves: {},
      start: true, //Will eventually need to be goal selection phase
      endIf: () => false, // All players have confirmed four cards in programming line,
      next: EXECUTION,
    },
    [EXECUTION]: {
      onBegin: () => {}, // reveal all cards
      moves: {},
    },
  },
  turn: {
    stages: {
      playCard: {
        moves: {},
      },
    },
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
