export const MOVE_ONE = "MOVE_ONE";
export const MOVE_TWO = "MOVE_TWO";
export const DROP_POS_ONE = "DROP_POS_ONE";
export const DROP_POS_TWO = "DROP_POS_TWO";
export const DROP_NEG_ONE = "DROP_NEG_ONE";
export const DROP_NEG_TWO = "DROP_NEG_TWO";
export const REACT = "REACT";
export const FIGHT = "FIGHT";
export const BOND = "BOND";

export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
  chatCharacterOne: null,
  chatCharacterTwo: null,
};

export const NON_CHAT_ACTIONS = [
  MOVE_ONE,
  MOVE_TWO,
  DROP_POS_ONE,
  DROP_POS_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
  REACT,
];

export const CHAT_ACTIONS = [FIGHT, BOND];

const chatInteraction = (state, action) => {
  if (state.chatCharacterOne === null) {
    return {
      ...state,
      message: `${state.stagedAction} - character one: ${action.character}`,
      chatCharacterOne: action.character,
    };
  } else if (state.chatCharacterTwo === null || state.stagedAction === BOND) {
    return {
      ...state,
      message: `${state.stagedAction} - character one: ${state.chatCharacterOne}, character two: ${action.character}`,
      chatCharacterTwo: action.character,
    };
  } else if (state.stagedAction === FIGHT) {
    return {
      ...state,
      message: `${state.stagedAction} - character one: ${state.chatCharacterOne}, character two: ${state.chatCharacterTwo}. Mover - ${action.character}`,
      selectedCharacter: action.character,
    };
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case MOVE_ONE_CLICK:
    case MOVE_TWO_CLICK:
    case DROP_POS_ONE_CLICK:
    case DROP_POS_TWO_CLICK:
    case DROP_NEG_ONE_CLICK:
    case DROP_NEG_TWO_CLICK:
    case BOND_CLICK:
    case FIGHT_CLICK:
    case REACT_CLICK:
      return {
        ...state,
        message: `${action.action} - Select a character`,
        stagedAction: action.action,
      };

    case CHARACTER_CLICK:
      if (NON_CHAT_ACTIONS.includes(state.stagedAction)) {
        return {
          ...state,
          message: `${state.stagedAction} - ${action.character}`,
          selectedCharacter: action.character,
          selectedRoom: null,
        };
      } else if (CHAT_ACTIONS.includes(state.stagedAction)) {
        return chatInteraction(state, action);
      }
      return state;
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
      } else if (
        state.stagedAction === FIGHT &&
        state.selectedCharacter &&
        state.chatCharacterOne &&
        state.chatCharacterTwo
      ) {
        return {
          ...state,
          message: `${state.stagedAction} - character one: ${state.chatCharacterOne}, character two: ${state.chatCharacterTwo}. ${state.selectedCharacter} to ${action.room}`,
          selectedRoom: action.room,
        };
      }
      return state;
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
const DROP_POS_ONE_CLICK = "DROP_POS_ONE_CLICK";
const DROP_POS_TWO_CLICK = "DROP_POS_TWO_CLICK";
const DROP_NEG_ONE_CLICK = "DROP_NEG_ONE_CLICK";
const DROP_NEG_TWO_CLICK = "DROP_NEG_TWO_CLICK";
const REACT_CLICK = "REACT_CLICK";
const BOND_CLICK = "BOND_CLICK";
const FIGHT_CLICK = "FIGHT_CLICK";
const RESET = "RESET";

// TODO: clean all this up
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

export const reactClickAction = {
  type: REACT_CLICK,
  action: REACT,
};

export const bondClickAction = {
  type: BOND_CLICK,
  action: BOND,
};

export const fightClickAction = {
  type: FIGHT_CLICK,
  action: FIGHT,
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
