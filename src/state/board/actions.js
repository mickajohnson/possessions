import {
  MOVE_ONE_CLICK,
  MOVE_TWO_CLICK,
  DROP_NEG_ONE_CLICK,
  DROP_POS_ONE_CLICK,
  DROP_NEG_TWO_CLICK,
  DROP_POS_TWO_CLICK,
  FIGHT_CLICK,
  BOND_CLICK,
  REACT_CLICK,
  RESET,
  CHARACTER_CLICK,
  ROOM_CLICK,
  DROP_CLICK,
} from "./reducer";

import {
  FIGHT,
  BOND,
  MOVE_ONE,
  MOVE_TWO,
  REACT,
  DROP_POS_ONE,
  DROP_POS_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
} from "../../constants";

// TODO: clean all this up
export const moveOneClickAction = {
  type: MOVE_ONE_CLICK,
  action: MOVE_ONE,
};

export const moveTwoClickAction = {
  type: MOVE_TWO_CLICK,
  action: MOVE_TWO,
};

export const dropPosOneClickAction = {
  type: DROP_POS_ONE_CLICK,
  action: DROP_POS_ONE,
};

export const dropPosTwoClickAction = {
  type: DROP_POS_TWO_CLICK,
  action: DROP_POS_TWO,
};

export const dropNegOneClickAction = {
  type: DROP_NEG_ONE_CLICK,
  action: DROP_NEG_ONE,
};

export const dropNegTwoClickAction = {
  type: DROP_NEG_TWO_CLICK,
  action: DROP_NEG_TWO,
};

export const reactClickAction = {
  type: REACT_CLICK,
  action: REACT,
};

export const bondClickAction = {
  type: BOND_CLICK,
  action: BOND,
};

export const fightClickAction = {
  type: FIGHT_CLICK,
  action: FIGHT,
};

export const resetAction = {
  type: RESET,
};

export const characterClickAction = (character) => ({
  type: CHARACTER_CLICK,
  character,
});

export const roomClickAction = (room) => ({
  type: ROOM_CLICK,
  room,
});

export const dropClickAction = (dropperKey) => ({
  type: DROP_CLICK,
  dropperKey,
});
