import * as React from "react";
import PropTypes from "prop-types";

const BoardContext = React.createContext(undefined);
const BoardDispatchContext = React.createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function BoardProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    message: "",
    stagedAction: null,
    selectedRoom: null,
    selectedCharacter: null,
  });
  return (
    <BoardContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
}

function useBoardState() {
  const context = React.useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoardState must be used within a BoardProvider");
  }
  return context;
}

function useBoardStateDispatch() {
  const context = React.useContext(BoardDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useBoardStateDispatch must be used within a BoardProvider"
    );
  }
  return context;
}
export { BoardProvider, useBoardState, useBoardStateDispatch };

BoardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
