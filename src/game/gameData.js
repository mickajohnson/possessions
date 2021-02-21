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
import { makeId } from "../utils";

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

export const getMoveOneCard = () => ({
  action: MOVE_ONE,
  name: "Move One",
  id: makeId(),
});

export const getMoveTwoCard = () => ({
  action: MOVE_TWO,
  name: "Move Two",
  id: makeId(),
});

export const getDropNegOneCard = () => ({
  action: DROP_NEG_ONE,
  name: "Drop -1",
  id: makeId(),
});

export const getDropNegTwoCard = () => ({
  action: DROP_NEG_TWO,
  name: "Drop -2",
  id: makeId(),
});

export const getDropPosTwoCard = () => ({
  action: DROP_POS_TWO,
  name: "Drop +2",
  id: makeId(),
});

export const getDropPosOneCard = () => ({
  action: DROP_POS_ONE,
  name: "Drop -1",
  id: makeId(),
});

export const getReactCard = () => ({
  action: REACT,
  name: "React",
  id: makeId(),
});

export const getChatCard = () => ({
  action: CHAT,
  name: "Chat",
  id: makeId(),
});

export const getDefaultDeck = () => [
  getMoveOneCard(),
  getMoveOneCard(),
  getMoveOneCard(),
  getMoveTwoCard(),
  getMoveTwoCard(),
  getDropNegOneCard(),
  getDropNegTwoCard(),
  getDropPosOneCard(),
  getDropPosTwoCard(),
  getReactCard(),
  getReactCard(),
  getChatCard(),
  getChatCard(),
];

export const getEmptyCommands = () => ({
  0: null,
  1: null,
  2: null,
  3: null,
});
