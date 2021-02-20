import shuffle from "lodash/shuffle";
import reduce from "lodash/reduce";
import cloneDeep from "lodash/cloneDeep";

import { roomKeyToNameMapping, dropTemplate } from "./gameData";
import {
  CHARACTER_KEYS,
  ROOM_KEYS,
  MOM,
  DAD,
  DAUGHTER,
  GRANDPA,
  DAUGHTERS_ROOM,
  BATHROOM,
  PARENTS_ROOM,
  GRANDPAS_ROOM,
  MOM_DAD,
  MOM_DAUGHTER,
  MOM_GRANDPA,
  GRANDPA_DAD,
  GRANDPA_DAUGHTER,
  DAD_DAUGHTER,
} from "../constants";
import { makeId } from "../utils";

const createInitialDrops = () => {
  return reduce(
    CHARACTER_KEYS,
    (dropsArray, characterKey) => {
      [1, -1].forEach((value) => {
        dropsArray.push({ id: makeId(), character: characterKey, value });
      });
      return dropsArray;
    },
    []
  );
};

const createInitialRooms = (shuffledRoomKeys, shuffledDrops) => {
  return reduce(
    shuffledRoomKeys,
    (roomsObject, roomKey, index) => {
      const newRoomObject = {
        position: index,
        drops: cloneDeep(dropTemplate),
        name: roomKeyToNameMapping[roomKey],
      };

      if (shuffledDrops.length && index !== 4) {
        const newDrop = shuffledDrops.pop();
        newRoomObject.drops[newDrop.character].push(newDrop);
      }

      roomsObject[roomKey] = newRoomObject;
      return roomsObject;
    },
    {}
  );
};

const createInitialCharacters = () => ({
  [MOM]: { name: "Mom", location: PARENTS_ROOM },
  [DAD]: { name: "Dad", location: BATHROOM },
  [DAUGHTER]: { name: "Daughter", location: DAUGHTERS_ROOM },
  [GRANDPA]: { name: "Grandpa", location: GRANDPAS_ROOM },
});

const createInitialRelationships = () => ({
  [MOM_DAD]: { name: "Mom & Dad", score: 0 },
  [MOM_DAUGHTER]: { name: "Mom & Daughter", score: 0 },
  [MOM_GRANDPA]: { name: "Mom & Grandpa", score: 0 },
  [GRANDPA_DAD]: { name: "Grandpa & Dad", score: 0 },
  [GRANDPA_DAUGHTER]: { name: "Grandpa & Daughter", score: 0 },
  [DAD_DAUGHTER]: { name: "Dad & Daughter", score: 0 },
});

export default function setup() {
  const relationships = createInitialRelationships();

  const characters = createInitialCharacters();

  const shuffledRoomKeys = shuffle(ROOM_KEYS);

  const shuffledDrops = shuffle(createInitialDrops());

  const rooms = createInitialRooms(shuffledRoomKeys, shuffledDrops);

  return {
    roomOrder: shuffledRoomKeys,
    rooms,
    characters,
    relationships,
  };
}
