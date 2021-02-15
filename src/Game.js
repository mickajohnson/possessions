import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";

import { ROOMS } from "./constants";

export const NightStandStuff = {
  setup: () => ({
    roomOrder: shuffle(ROOMS),
    rooms: ROOMS,
  }),
  turn: {
    moveLimit: 1,
  },
  // endIf: (G, ctx) => {
  //   if (IsVictory(G.cells)) {
  //     return { winner: ctx.currentPlayer };
  //   }
  //   if (IsDraw(G.cells)) {
  //     return { draw: true };
  //   }
  // },

  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },
  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    },
  },
};
