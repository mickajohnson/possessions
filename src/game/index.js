import setup from "./setup";
import { EXECUTION, PLANNING } from "../constants";
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
} from "./moves";

export const NightStandStuff = {
  setup,
  phases: {
    [PLANNING]: {
      onBegin: (G) => {
        G.currentCommandKey = 3;
      },
      moves: {
        programCard,
        drawCard,
      },
      start: true, //Will eventually need to be goal selection phase
      next: EXECUTION,
    },
    [EXECUTION]: {
      onBegin: (G) => {
        G.currentCommandKey = 0;
        // reveal all cards
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

  turn: {
    onEnd: (G, ctx) => {
      if (
        ctx.phase === EXECUTION &&
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
};

export default NightStandStuff;
