import { useReducer } from "react";
import { createContainer } from "react-tracked";

import {
  FIGHT,
  BOND,
  MOVE_ONE,
  MOVE_TWO,
  NON_CHAT_ACTIONS,
  CHAT_ACTIONS,
  REACT,
} from "../../constants";

export const MOVE_ONE_CLICK = "MOVE_ONE_CLICK";
export const MOVE_TWO_CLICK = "MOVE_TWO_CLICK";
export const CHARACTER_CLICK = "CHARACTER_CLICK";
export const ROOM_CLICK = "ROOM_CLICK";
export const DROP_POS_ONE_CLICK = "DROP_POS_ONE_CLICK";
export const DROP_POS_TWO_CLICK = "DROP_POS_TWO_CLICK";
export const DROP_NEG_ONE_CLICK = "DROP_NEG_ONE_CLICK";
export const DROP_NEG_TWO_CLICK = "DROP_NEG_TWO_CLICK";
export const REACT_CLICK = "REACT_CLICK";
export const BOND_CLICK = "BOND_CLICK";
export const FIGHT_CLICK = "FIGHT_CLICK";
export const DROP_CLICK = "DROP_CLICK";
export const RESET = "RESET";
export const SELECT_ACTION = "SELECT_ACTION";

// TODO: at some point consolidate dropper character and others
export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
  chatCharacterOne: null,
  chatCharacterTwo: null,
  dropperCharacter: null,
};

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

function reducer(state, action) {
  switch (action.type) {
    case SELECT_ACTION:
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

    case DROP_CLICK:
      if (state.stagedAction === REACT && state.selectedCharacter) {
        return {
          ...state,
          dropperCharacter: action.dropperKey,
          message: `${state.selectedCharacter} pick up ${action.dropperKey}`,
        };
      }
      return state;
    case RESET:
      return initialState;
    default:
      return state;
  }
}

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState: useBoardState,
  useUpdate: useDispatch,
} = createContainer(useValue);
