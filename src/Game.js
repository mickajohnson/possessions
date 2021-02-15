import { INVALID_MOVE } from "boardgame.io/core";
import shuffle from "lodash/shuffle";
import chunk from "lodash/chunk";

import { ROOMS, CHARACTERS } from "./constants";

export const NightStandStuff = {
  setup: () => ({
    roomOrder: chunk(shuffle(Object.keys(ROOMS)), 3),
    rooms: ROOMS,
    characters: CHARACTERS,
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
    dropPositiveOne: (G, ctx, character) => {
      // if (G.cells[id] !== null) {
      //   return INVALID_MOVE;
      // }
      // G.rooms[] = ctx.currentPlayer;
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
