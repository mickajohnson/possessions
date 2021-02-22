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
  programCard,
  drawCard,
} from "./moves";

export const NightStandStuff = {
  setup,
  phases: {
    [PLANNING]: {
      onBegin: (G) => {
        G.currentCommandKey = 0;
      },
      moves: {
        programCard,
        drawCard,
      },
      start: true, //Will eventually need to be goal selection phase
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
