export const MOVE_ONE = "MOVE_ONE";
export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case MOVE_CLICK:
      return {
        ...state,
        message: "Select a character",
        stagedAction: MOVE_ONE,
      };
    case CHARACTER_CLICK:
      if (state.stagedAction === MOVE_ONE) {
        return {
          ...state,
          message: `Where should ${action.character} go?`,
          selectedCharacter: action.character,
        };
      } else {
        return state;
      }
    case ROOM_CLICK:
      if (state.stagedAction === MOVE_ONE && state.selectedCharacter) {
        return {
          ...state,
          message: `${state.selectedCharacter} to ${action.room}?`,
          selectedRoom: action.room,
        };
      } else {
        return state;
      }
    case RESET:
      return initialState;
    default:
      return state;
  }
}

const MOVE_CLICK = "MOVE_CLICK";
const CHARACTER_CLICK = "CHARACTER_CLICK";
const ROOM_CLICK = "ROOM_CLICK";
const RESET = "RESET";

export const moveClickAction = {
  type: MOVE_CLICK,
};

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
