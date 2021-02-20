import setup from "./setup";

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
