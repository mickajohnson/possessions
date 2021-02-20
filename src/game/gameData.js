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

const dropTemplate = {
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

export const Rooms = {
  [LIVING_ROOM]: {
    name: "Living Room",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [DINING_ROOM]: {
    name: "Dining Room",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [KITCHEN]: {
    name: "Kitchen",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [BATHROOM]: {
    name: "Bathroom",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [PARENTS_ROOM]: {
    name: "Parent's Room",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [DAUGHTERS_ROOM]: {
    name: "Daughter's Room",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [GRANDPAS_ROOM]: {
    name: "Grandpa's Room",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [GARAGE]: {
    name: "Garage",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
  [OFFICE]: {
    name: "Office",
    drops: cloneDeep(dropTemplate),
    position: 0,
  },
};

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
