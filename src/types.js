import PropTypes from "prop-types";

export const G = PropTypes.exact({
  players: PropTypes.object,
  characters: PropTypes.objectOf(character).isRequired,
  currentCommandKey: PropTypes.number.isRequired,
  roomOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  rooms: PropTypes.objectOf(room).isRequire,
  relationships: PropTypes.objectOf(relationship).isRequired,
  roundNumber: 0,
});

export const player = PropTypes.shape({
  deck: PropTypes.arrayOf(card).isRequired,
  hand: PropTypes.arrayOf(card).isRequired,
  commands: PropTypes.objectOf(card).isRequired,
  discardPile: PropTypes.arrayOf(card).isRequired,
  goals: PropTypes.arrayOf(goal),
});

export const card = PropTypes.shape({
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const goal = PropTypes.shape({
  polarity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const goalWithScore = PropTypes.shape({
  polarity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const ctx = PropTypes.exact({
  phase: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
});

export const moves = PropTypes.shape({
  removeGoal: PropTypes.func,
  setPlayerNames: PropTypes.func,
  programCard: PropTypes.func,
  drawCard: PropTypes.func,
  dropPositiveOne: PropTypes.func,
  dropNegativeOne: PropTypes.func,
  dropNegativeTwo: PropTypes.func,
  dropPositiveTwo: PropTypes.func,
  moveOne: PropTypes.func,
  moveTwo: PropTypes.func,
  react: PropTypes.func,
  bond: PropTypes.func,
  fight: PropTypes.func,
  skipTurn: PropTypes.func,
});

export const character = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
});

export const lobbyClient = PropTypes.shape({
  createMatch: PropTypes.func.isRequired,
  joinMatch: PropTypes.func.isRequired,
});

export const relationship = PropTypes.shape({
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const room = PropTypes.shape({
  position: PropTypes.number.isRequired,
  drops: PropTypes.objectOf(drop),
  name: PropTypes.string.isRequired,
});

export const drop = PropTypes.shape({
  id: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

export const gameoverData = {
  scores: PropTypes.arrayOf(score).isRequired,
  winner: score.isRequired,
};

export const score = {
  score: PropTypes.number.isRequired,
  playerID: PropTypes.string.isRequired,
  scoredGoals: PropTypes.arrayOf(goalWithScore).isRequired,
};

export const storedPlayerData = {
  playerID: PropTypes.number.isRequired,
  playerCredentials: PropTypes.any.isRequired,
  matchID: PropTypes.number.isRequired,
};
