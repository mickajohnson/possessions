// TODO: BEtter constants here

export const MOM = "MOM";
export const DAD = "DAD";
export const DAUGHTER = "DAUGHTER";
export const GRANDPA = "GRANDPA";

export const LIVING_ROOM = "LIVING_ROOM";
export const DINING_ROOM = "DINING_ROOM";
export const PARENTS_ROOM = "PARENTS_ROOM";
export const DAUGHTERS_ROOM = "DAUGHTERS_ROOM";
export const GRANDPAS_ROOM = "GRANDPAS_ROOM";
export const BATHROOM = "BATHROOM";
export const OFFICE = "OFFICE";
export const GARAGE = "GARAGE";
export const KITCHEN = "KITCHEN";

export const CHARACTERS = {
  [MOM]: { name: "Mom", location: PARENTS_ROOM },
  [DAD]: { name: "Dad", location: BATHROOM },
  [DAUGHTER]: { name: "Daughter", location: DAUGHTERS_ROOM },
  [GRANDPA]: { name: "Grandpa", location: GRANDPAS_ROOM },
};

export const ROOMS = {
  [LIVING_ROOM]: {
    name: "Living Room",
    drops: [],
  },
  [DINING_ROOM]: {
    name: "Dining Room",
    drops: [],
  },
  [KITCHEN]: {
    name: "Kitchen",
    drops: [],
  },
  [BATHROOM]: {
    name: "Bathroom",
    drops: [],
  },
  [PARENTS_ROOM]: {
    name: "Parent's Room",
    drops: [],
  },
  [DAUGHTERS_ROOM]: {
    name: "Daughter's Room",
    drops: [],
  },
  [GRANDPAS_ROOM]: {
    name: "Grandpa's Room",
    drops: [],
  },
  [GARAGE]: {
    name: "Garage",
    drops: [],
  },
  [OFFICE]: {
    name: "Office",
    drops: [],
  },
};
