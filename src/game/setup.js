import shuffle from "lodash/shuffle";
import reduce from "lodash/reduce";
import cloneDeep from "lodash/cloneDeep";
import pullAt from "lodash/pullAt";

import {
  roomKeyToNameMapping,
  dropTemplate,
  getDefaultDeck,
  getEmptyCommands,
  getGoalCards,
  getInitialRelationships,
} from "./gameData";
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

const createInitialPlayers = (ctx, goals) =>
  ctx.playOrder.reduce((playerObject, playerKey) => {
    const deck = shuffle(getDefaultDeck());
    const hand = pullAt(deck, [0, 1, 2, 3, 4, 5]);
    playerObject[playerKey] = {
      deck,
      hand,
      commands: getEmptyCommands(),
      discardPile: [],
      goals: goals.splice(-4),
    };

    return playerObject;
  }, {});

export default function setup(ctx) {
  const goals = shuffle(getGoalCards());

  const players = createInitialPlayers(ctx, goals);

  const relationships = getInitialRelationships();

  const characters = createInitialCharacters();

  const shuffledRoomKeys = shuffle(ROOM_KEYS);

  const shuffledDrops = shuffle(createInitialDrops());

  const rooms = createInitialRooms(shuffledRoomKeys, shuffledDrops);

  return {
    roomOrder: shuffledRoomKeys,
    rooms,
    characters,
    relationships,
    players,
    currentCommandKey: 3,
  };
}
