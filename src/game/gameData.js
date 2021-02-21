import {
  MOM,
  DAD,
  DAUGHTER,
  GRANDPA,
  DAUGHTERS_ROOM,
  BATHROOM,
  PARENTS_ROOM,
  GRANDPAS_ROOM,
  DINING_ROOM,
  KITCHEN,
  LIVING_ROOM,
  GARAGE,
  OFFICE,
  MOVE_ONE,
  MOVE_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
  DROP_POS_TWO,
  DROP_POS_ONE,
  REACT,
  CHAT,
} from "../constants";

export const dropTemplate = {
  [MOM]: [],
  [DAD]: [],
  [GRANDPA]: [],
  [DAUGHTER]: [],
};

export const roomKeyToNameMapping = {
  [LIVING_ROOM]: "Living Room",
  [DINING_ROOM]: "Dining Room",
  [KITCHEN]: "Kitchen",
  [BATHROOM]: "Bathroom",
  [PARENTS_ROOM]: "Parent's Room",
  [DAUGHTERS_ROOM]: "Daughter's Room",
  [GRANDPAS_ROOM]: "Grandpa's Room",
  [GARAGE]: "Garage",
  [OFFICE]: "Office",
};

export const moveOneCard = {
  action: MOVE_ONE,
  name: "Move One",
};

export const moveTwoCard = {
  action: MOVE_TWO,
  name: "Move Two",
};

export const dropNegOneCard = {
  action: DROP_NEG_ONE,
  name: "Drop -1",
};

export const dropNegTwoCard = {
  action: DROP_NEG_TWO,
  name: "Drop -2",
};

export const dropPosTwoCard = {
  action: DROP_POS_TWO,
  name: "Drop +2",
};

export const dropPosOneCard = {
  action: DROP_POS_ONE,
  name: "Drop -1",
};

export const reactCard = {
  action: REACT,
  name: "React",
};

export const chatCard = {
  action: CHAT,
  name: "Chat",
};

export const defaultDeck = [
  moveOneCard,
  moveOneCard,
  moveOneCard,
  moveTwoCard,
  moveTwoCard,
  dropNegOneCard,
  dropNegTwoCard,
  dropPosOneCard,
  dropPosTwoCard,
  reactCard,
  reactCard,
  chatCard,
  chatCard,
];
