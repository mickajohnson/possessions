export const MOM = "MOM";
export const DAD = "DAD";
export const DAUGHTER = "DAUGHTER";
export const GRANDPA = "GRANDPA";

export const MOM_DAD = `${MOM}${DAD}`;
export const MOM_GRANDPA = `${MOM}${GRANDPA}`;
export const MOM_DAUGHTER = `${MOM}${DAUGHTER}`;
export const DAD_DAUGHTER = `${DAD}${DAUGHTER}`;
export const GRANDPA_DAUGHTER = `${GRANDPA}${DAUGHTER}`;
export const GRANDPA_DAD = `${GRANDPA}${DAD}`;

export const RELATIONSHIPS = [
  MOM_DAD,
  MOM_GRANDPA,
  MOM_DAUGHTER,
  DAD_DAUGHTER,
  GRANDPA_DAUGHTER,
  GRANDPA_DAD,
];

export const LIVING_ROOM = "LIVING_ROOM";
export const DINING_ROOM = "DINING_ROOM";
export const PARENTS_ROOM = "PARENTS_ROOM";
export const DAUGHTERS_ROOM = "DAUGHTERS_ROOM";
export const GRANDPAS_ROOM = "GRANDPAS_ROOM";
export const BATHROOM = "BATHROOM";
export const OFFICE = "OFFICE";
export const GARAGE = "GARAGE";
export const KITCHEN = "KITCHEN";

export const POSITIVE = "POSITIVE";
export const NEGATIVE = "NEGATIVE";

export const CHARACTER_KEYS = [MOM, DAD, DAUGHTER, GRANDPA];
export const ROOM_KEYS = [
  LIVING_ROOM,
  DINING_ROOM,
  KITCHEN,
  BATHROOM,
  PARENTS_ROOM,
  DAUGHTERS_ROOM,
  GRANDPAS_ROOM,
  GARAGE,
  OFFICE,
];

export const MOVE_ONE = "MOVE_ONE";
export const MOVE_TWO = "MOVE_TWO";
export const DROP_POS_ONE = "DROP_POS_ONE";
export const DROP_POS_TWO = "DROP_POS_TWO";
export const DROP_NEG_ONE = "DROP_NEG_ONE";
export const DROP_NEG_TWO = "DROP_NEG_TWO";
export const REACT = "REACT";
export const FIGHT = "FIGHT";
export const BOND = "BOND";
export const CHAT = "CHAT";

export const NON_CHAT_ACTIONS = [
  MOVE_ONE,
  MOVE_TWO,
  DROP_POS_ONE,
  DROP_POS_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
  REACT,
];
export const NON_RESTRICTED_ACTIONS = [
  MOVE_ONE,
  MOVE_TWO,
  DROP_POS_ONE,
  DROP_POS_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
];
export const CHAT_ACTIONS = [FIGHT, BOND];

export const EXECUTION = "EXECUTION";
export const PLANNING = "PLANNING";
export const GOAL_SELECTION = "GOAL_SELECTION";
