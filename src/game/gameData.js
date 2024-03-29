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
  RELATIONSHIPS,
  POSITIVE,
  NEGATIVE,
  MOM_DAD,
  MOM_DAUGHTER,
  MOM_GRANDPA,
  GRANDPA_DAD,
  GRANDPA_DAUGHTER,
  DAD_DAUGHTER,
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
  [GRANDPAS_ROOM]: "Gramps' Room",
  [GARAGE]: "Garage",
  [OFFICE]: "Office",
};

export const relationshipKeyToNameMapping = {
  [MOM_DAD]: "Mom / Dad",
  [MOM_DAUGHTER]: "Mom / Daughter",
  [MOM_GRANDPA]: "Mom / Gramps",
  [GRANDPA_DAD]: "Gramps / Dad",
  [GRANDPA_DAUGHTER]: "Gramps / Daughter",
  [DAD_DAUGHTER]: "Dad / Daughter",
};

export const relationshipKeyToDescriptionMapping = {
  [MOM_DAD]: {
    [POSITIVE]: "You regret the things you never told your spouse",
    [NEGATIVE]: "Murdered by spouse",
  },
  [MOM_DAUGHTER]: {
    [POSITIVE]: "Your mom was great but died too young",
    [NEGATIVE]: "Your mom was an unstable zealot",
  },
  [MOM_GRANDPA]: {
    [POSITIVE]: "Your elderly parent was your only friend",
    [NEGATIVE]: "Your children grew up and abandoned you",
  },
  [GRANDPA_DAD]: {
    [POSITIVE]: "You thrived off of masculine energy",
    [NEGATIVE]: "Your in-laws convinced your spouse to leave you",
  },
  [GRANDPA_DAUGHTER]: {
    [POSITIVE]: "Raised by a grandparent",
    [NEGATIVE]: "Your grandpa was a war criminal",
  },
  [DAD_DAUGHTER]: {
    [POSITIVE]: "You were your dad's favorite",
    [NEGATIVE]: "Your father abandoned you",
  },
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
  name: "Drop +1",
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

export const getGoalCards = () => {
  return RELATIONSHIPS.reduce((goals, relationship) => {
    [POSITIVE, NEGATIVE].forEach((polarity) => {
      goals.push({
        polarity,
        description:
          relationshipKeyToDescriptionMapping[relationship][polarity],
        name: relationshipKeyToNameMapping[relationship],
        relationship,
        id: makeId(),
      });
    });
    return goals;
  }, []);
};

export const getInitialRelationships = () => {
  return RELATIONSHIPS.reduce((relationshipObject, relationshipKey) => {
    relationshipObject[relationshipKey] = {
      score: 0,
      // score: sample([-4, -3, -2, -1, -0, 1, 2, 3, 4]),
      name: relationshipKeyToNameMapping[relationshipKey],
    };
    return relationshipObject;
  }, {});
};
