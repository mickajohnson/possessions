export const MOVE_ONE = "MOVE_ONE";
export const MOVE_TWO = "MOVE_TWO";
export const DROP_POS_ONE = "DROP_POS_ONE";
export const DROP_POS_TWO = "DROP_POS_TWO";
export const DROP_NEG_ONE = "DROP_NEG_ONE";
export const DROP_NEG_TWO = "DROP_NEG_TWO";

export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case MOVE_ONE_CLICK:
    case MOVE_TWO_CLICK:
    case DROP_POS_ONE_CLICK:
    case DROP_POS_TWO_CLICK:
    case DROP_NEG_ONE_CLICK:
    case DROP_NEG_TWO_CLICK:
      return {
        ...state,
        message: `${action.action} - Select a character`,
        stagedAction: action.action,
      };

    case CHARACTER_CLICK:
      if (state.stagedAction) {
        return {
          ...state,
          message: `${state.stagedAction} - ${action.character}`,
          selectedCharacter: action.character,
          selectedRoom: null,
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
export const DROP_POS_ONE_CLICK = "DROP_POS_ONE_CLICK";
export const DROP_POS_TWO_CLICK = "DROP_POS_TWO_CLICK";
export const DROP_NEG_ONE_CLICK = "DROP_NEG_ONE_CLICK";
export const DROP_NEG_TWO_CLICK = "DROP_NEG_TWO_CLICK";
const RESET = "RESET";

export const moveOneClickAction = {
  type: MOVE_ONE_CLICK,
  action: MOVE_ONE,
};

export const moveTwoClickAction = {
  type: MOVE_TWO_CLICK,
  action: MOVE_TWO,
};

export const dropPosOneClickAction = {
  type: DROP_POS_ONE_CLICK,
  action: DROP_POS_ONE,
};

export const dropPosTwoClickAction = {
  type: DROP_POS_TWO_CLICK,
  action: DROP_POS_TWO,
};

export const dropNegOneClickAction = {
  type: DROP_NEG_ONE_CLICK,
  action: DROP_NEG_ONE,
};

export const dropNegTwoClickAction = {
  type: DROP_NEG_TWO_CLICK,
  action: DROP_NEG_TWO,
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
