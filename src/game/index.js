import setup from "./setup";
import { EXECUTION, PLANNING, GOAL_SELECTION } from "../constants";
import every from "lodash/every";

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
      moves: {
        removeGoal,
      },
      start: true,
      next: PLANNING,
      turn: {
        moveLimit: 1,
        onEnd: (G, ctx) => {
          if (every(G.players, (player) => player.goals.length === 3)) {
            ctx.events.endPhase();
          }
        },
      },
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
    },
  },
};

export default NightStandStuff;
