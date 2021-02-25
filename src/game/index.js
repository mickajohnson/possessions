import setup from "./setup";
import { EXECUTION, PLANNING, GOAL_SELECTION } from "../constants";
import every from "lodash/every";
import maxBy from "lodash/maxBy";
import { tallyScores } from "./validations";

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
} from "./moves";

export const NightStandStuff = {
  setup,
  phases: {
    [GOAL_SELECTION]: {
      onEnd: (G) => {
        G.roundNumber = 1;
      },
      moves: {
        removeGoal,
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
        // reveal all cards
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
    if (G.roundNumber === 7) {
      const scores = tallyScores(G);
      return { winner: maxBy(scores, "score"), scores };
    }
  },
  onEnd: (_, ctx) => {
    console.log(ctx.gameover);
  },
};

export default NightStandStuff;
