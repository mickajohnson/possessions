export const MOVE_ONE = "MOVE_ONE";
export const MOVE_TWO = "MOVE_TWO";

export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
};

export function reducer(state, action) {
  switch (action.type) {
    // CLEAN UP below - action should pass stagedAction
    case MOVE_ONE_CLICK:
      return {
        ...state,
        message: "Select a character",
        stagedAction: MOVE_ONE,
      };
    case MOVE_TWO_CLICK:
      return {
        ...state,
        message: "Select a character",
        stagedAction: MOVE_TWO,
      };
    case CHARACTER_CLICK:
      if ([MOVE_ONE, MOVE_TWO].includes(state.stagedAction)) {
        return {
          ...state,
          message: `Where should ${action.character} go?`,
          selectedCharacter: action.character,
        };
      } else {
        return state;
      }
    case ROOM_CLICK:
      if (
        [MOVE_ONE, MOVE_TWO].includes(state.stagedAction) &&
        state.selectedCharacter
      ) {
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

const MOVE_ONE_CLICK = "MOVE_ONE_CLICK";
const MOVE_TWO_CLICK = "MOVE_TWO_CLICK";
const CHARACTER_CLICK = "CHARACTER_CLICK";
const ROOM_CLICK = "ROOM_CLICK";
const RESET = "RESET";

export const moveOneClickAction = {
  type: MOVE_ONE_CLICK,
};

export const moveTwoClickAction = {
  type: MOVE_TWO_CLICK,
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
