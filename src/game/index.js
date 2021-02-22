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
        G.currentCommandKey = 3;
      },
      moves: {
        programCard,
        drawCard,
      },
      start: true, //Will eventually need to be goal selection phase
      next: EXECUTION,
    },
    [EXECUTION]: {
      onBegin: (G) => {
        G.currentCommandKey = 0;
        // reveal all cards
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
