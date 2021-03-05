import { useReducer } from "react";
import { createContainer } from "react-tracked";

import {
  FIGHT,
  BOND,
  MOVE_ONE,
  MOVE_TWO,
  NON_CHAT_ACTIONS,
  CHAT_ACTIONS,
  CHAT,
  REACT,
  DROP_POS_ONE,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
  DROP_POS_TWO,
  LIVING_ROOM,
  DINING_ROOM,
  KITCHEN,
  BATHROOM,
  PARENTS_ROOM,
  DAUGHTERS_ROOM,
  GRANDPAS_ROOM,
  GARAGE,
  OFFICE,
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
export const NO_VALID_MOVES = "NO_VALID_MOVES";

// TODO: at some point consolidate dropper character and others
export const initialState = {
  message: "",
  selectedRoom: null,
  selectedCharacter: null,
  stagedAction: null,
  chatCharacterOne: null,
  chatCharacterTwo: null,
  dropperCharacter: null,
  canConfirm: false,
};

const translations = {
  [FIGHT]: "Fight",
  [BOND]: "Bond",
  [MOVE_ONE]: "Move One",
  [MOVE_TWO]: "Move Two",
  [REACT]: "React",
  [DROP_NEG_ONE]: "Drop -1",
  [DROP_NEG_TWO]: "Drop -2",
  [DROP_POS_ONE]: "Drop +1",
  [DROP_POS_TWO]: "Drop +2",
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

const chatInteraction = (state, action) => {
  if (state.chatCharacterOne === null) {
    return {
      ...state,
      message: `${translations[state.stagedAction]} - ${
        action.character
      }. Select other character.`,
      chatCharacterOne: action.character,
    };
  } else if (state.chatCharacterTwo === null && state.stagedAction === BOND) {
    return {
      ...state,
      message: `${translations[state.stagedAction]} - ${
        state.chatCharacterOne
      } & ${action.character}. Confirm?`,
      chatCharacterTwo: action.character,
      canConfirm: true,
    };
  } else if (state.chatCharacterTwo === null && state.stagedAction === FIGHT) {
    return {
      ...state,
      message: `${translations[state.stagedAction]} - ${
        state.chatCharacterOne
      } & ${action.character}. Which character will move?`,
      chatCharacterTwo: action.character,
    };
  } else if (state.stagedAction === FIGHT) {
    return {
      ...state,
      message: `${translations[state.stagedAction]} - ${
        state.chatCharacterOne
      } & ${state.chatCharacterTwo}. ${action.character} move to which room?`,
      selectedCharacter: action.character,
    };
  }
};

const characterClickMessage = (stagedAction, characterOne) => {
  if ([MOVE_ONE, MOVE_TWO].includes(stagedAction)) {
    return `${translations[stagedAction]} - ${characterOne} - Select a room.`;
  } else if (
    [DROP_NEG_ONE, DROP_NEG_TWO, DROP_POS_ONE, DROP_POS_TWO].includes(
      stagedAction
    )
  ) {
    return `${translations[stagedAction]} - ${characterOne} - Confirm?`;
  } else if (stagedAction === REACT) {
    return `${translations[stagedAction]} - ${characterOne} - Select dropped items.`;
  } else {
    return "";
  }
};

function reducer(state, action) {
  switch (action.type) {
    case SELECT_ACTION:
      return {
        ...initialState,
        message:
          action.action === CHAT
            ? "Chose fight or bond"
            : `${translations[action.action]} - Select a character`,
        stagedAction: action.action,
        canConfirm: action.action === REACT ? true : false,
      };

    case CHARACTER_CLICK:
      if (NON_CHAT_ACTIONS.includes(state.stagedAction)) {
        return {
          ...state,
          message: characterClickMessage(state.stagedAction, action.character),
          selectedCharacter: action.character,
          selectedRoom: null,
          canConfirm: [
            DROP_NEG_ONE,
            DROP_NEG_TWO,
            DROP_POS_ONE,
            DROP_POS_TWO,
          ].includes(state.stagedAction),
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
          message: `${state.selectedCharacter} to ${
            translations[action.room]
          }?`,
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
          message: `${translations[state.stagedAction]} - ${
            state.chatCharacterOne
          } & ${state.chatCharacterTwo}. ${state.selectedCharacter}  move to ${
            translations[action.room]
          }. Confirm?`,
          selectedRoom: action.room,
          canConfirm: true,
        };
      }
      return state;

    case DROP_CLICK:
      if (state.stagedAction === REACT && state.selectedCharacter) {
        return {
          ...state,
          dropperCharacter: action.dropperKey,
          message: `${state.selectedCharacter} react to ${action.dropperKey}. Confirm?`,
          canConfirm: true,
        };
      }
      return state;
    case NO_VALID_MOVES:
      return {
        ...state,
        message: "No valid moves. Skipping turn...",
      };
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
