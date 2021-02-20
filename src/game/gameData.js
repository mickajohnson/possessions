import cloneDeep from "lodash/cloneDeep";
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

export const Relationships = {
  [MOM_DAD]: { name: "Mom & Dad", score: 0 },
  [MOM_DAUGHTER]: { name: "Mom & Daughter", score: 0 },
  [MOM_GRANDPA]: { name: "Mom & Grandpa", score: 0 },
  [GRANDPA_DAD]: { name: "Grandpa & Dad", score: 0 },
  [GRANDPA_DAUGHTER]: { name: "Grandpa & Daughter", score: 0 },
  [DAD_DAUGHTER]: { name: "Dad & Daughter", score: 0 },
};

export const Characters = {
  [MOM]: { name: "Mom", location: PARENTS_ROOM },
  [DAD]: { name: "Dad", location: BATHROOM },
  [DAUGHTER]: { name: "Daughter", location: DAUGHTERS_ROOM },
  [GRANDPA]: { name: "Grandpa", location: GRANDPAS_ROOM },
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

export const roomKeys = [
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

export const initialDrops = [
  { id: makeId(), character: DAD, value: -1 },
  { id: makeId(), character: DAD, value: 1 },
  { id: makeId(), character: MOM, value: -1 },
  { id: makeId(), character: MOM, value: 1 },
  { id: makeId(), character: GRANDPA, value: -1 },
  { id: makeId(), character: GRANDPA, value: 1 },
  { id: makeId(), character: DAUGHTER, value: -1 },
  { id: makeId(), character: DAUGHTER, value: 1 },
];
