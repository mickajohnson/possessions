import setup from "./setup";
import { EXECUTION, PLANNING, GOAL_SELECTION } from "../constants";
import every from "lodash/every";
import maxBy from "lodash/maxBy";
import sortBy from "lodash/sortBy";
import reverse from "lodash/reverse";
import { tallyScores } from "./helpers";

import {
  dropNegativeOne,
  dropPositiveOne,
  dropNegativeTwo,
  dropPositiveTwo,
  moveOne,
  moveTwo,
  fight,
  bond,
  react,
  programCard,
  drawCard,
  skipTurn,
  removeGoal,
  setPlayerNames,
} from "./moves";

export const Possessions = {
  name: "possessions",
  setup,
  phases: {
    [GOAL_SELECTION]: {
      onEnd: (G) => {
        G.roundNumber = 1;
      },
      moves: {
        removeGoal,
        setPlayerNames,
      },
      start: true,
      next: PLANNING,
    },
    [PLANNING]: {
      onBegin: (G) => {
        G.currentCommandKey = 0;
      },
      moves: {
        programCard,
        drawCard,
      },
      next: EXECUTION,
    },
    [EXECUTION]: {
      onBegin: (G) => {
        G.currentCommandKey = 0;
      },
      turn: {
        onEnd: (G, ctx) => {
          if (
            every(
              G.players,
              (player) => player.commands[G.currentCommandKey] === null
            )
          ) {
            if (G.currentCommandKey === 3) {
              ctx.events.endPhase();
              ctx.events.endTurn();
              ctx.events.endTurn();
            } else {
              G.currentCommandKey += 1;
            }
          }
        },
      },
      next: PLANNING,
      moves: {
        dropPositiveOne,
        dropNegativeOne,
        dropNegativeTwo,
        dropPositiveTwo,
        moveOne,
        moveTwo,
        react,
        bond,
        fight,
        skipTurn,
      },
      onEnd: (G) => {
        G.roundNumber += 1;
      },
    },
  },
  endIf: (G) => {
    if (
      G.roundNumber === 1 &&
      every(G.players, (player) => player.goals.length === 3)
    ) {
      const scores = tallyScores(G);
      return {
        winner: maxBy(scores, "score"),
        scores: reverse(sortBy(scores, "score")),
      };
    }
  },
};

export default Possessions;
