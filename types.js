import PropTypes from "prop-types";

export const G = PropTypes.exact({
  players: PropTypes.object,
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

export const ctx = PropTypes.exact({
  phase: PropTypes.string.isRequired,
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
