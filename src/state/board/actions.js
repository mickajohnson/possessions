import {
  RESET,
  CHARACTER_CLICK,
  ROOM_CLICK,
  DROP_CLICK,
  SELECT_ACTION,
  NO_VALID_MOVES,
} from "./reducer";

export const selectAction = (action) => ({
  type: SELECT_ACTION,
  action,
});

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

export const noValidMoves = () => ({
  type: NO_VALID_MOVES,
});
