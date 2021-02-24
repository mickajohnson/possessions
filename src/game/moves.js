import { INVALID_MOVE } from "boardgame.io/core";
import remove from "lodash/remove";
import every from "lodash/every";
import shuffle from "lodash/shuffle";

import {
  isValidChat,
  isValidMoveOne,
  isValidMoveTwo,
  isValidReact,
} from "./validations";
import { changeScore, getRelationship } from "./helpers";
import { makeId } from "../utils";

const drop = (value) => (G, ctx, characterKey) => {
  const currentRoom = G.characters[characterKey].location;
  G.rooms[currentRoom].drops[characterKey].push({
    value: value,
    character: characterKey,
    id: makeId(),
  });
  ctx.events.endTurn();
  G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
};

export const dropNegativeOne = drop(-1);
export const dropNegativeTwo = drop(-2);

export const dropPositiveOne = drop(1);
export const dropPositiveTwo = drop(2);

export const moveOne = (G, ctx, characterKey, locationKey) => {
  if (isValidMoveOne(G, characterKey, locationKey)) {
    G.characters[characterKey].location = locationKey;
    ctx.events.endTurn();
    G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  } else {
    return INVALID_MOVE;
  }
};

export const moveTwo = (G, ctx, characterKey, locationKey) => {
  if (isValidMoveTwo(G, characterKey, locationKey)) {
    G.characters[characterKey].location = locationKey;
    ctx.events.endTurn();
    G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  } else {
    return INVALID_MOVE;
  }
};

export const react = (G, ctx, reactingCharKey, dropperCharKey) => {
  const characterRoomKey = G.characters[reactingCharKey].location;
  const characterRoom = G.rooms[characterRoomKey];

  if (isValidReact(G, characterRoomKey, dropperCharKey, reactingCharKey)) {
    const netEffect = characterRoom.drops[dropperCharKey].reduce(
      (combined, drop) => combined + drop.value,
      0
    );

    const relationship = getRelationship(
      G.relationships,
      dropperCharKey,
      reactingCharKey
    );

    changeScore(relationship, netEffect);

    characterRoom.drops[dropperCharKey] = [];
    ctx.events.endTurn();
    G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  } else {
    return INVALID_MOVE;
  }
};

export const bond = (G, ctx, characterOneKey, characterTwoKey) => {
  if (isValidChat(G, characterOneKey, characterTwoKey)) {
    const relationship = getRelationship(
      G.relationships,
      characterOneKey,
      characterTwoKey
    );

    changeScore(relationship, 1);
    ctx.events.endTurn();
    G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  } else {
    return INVALID_MOVE;
  }
};

export const fight = (
  G,
  ctx,
  characterOneKey,
  characterTwoKey,
  movingCharacterKey,
  destinationKey
) => {
  if (
    [characterOneKey, characterTwoKey].includes(movingCharacterKey) &&
    isValidChat(G, characterOneKey, characterTwoKey) &&
    isValidMoveOne(G, movingCharacterKey, destinationKey)
  ) {
    const relationship = getRelationship(
      G.relationships,
      characterOneKey,
      characterTwoKey
    );

    changeScore(relationship, -1);
    G.characters[movingCharacterKey].location = destinationKey;
    ctx.events.endTurn();
    G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  } else {
    return INVALID_MOVE;
  }
};

export const programCard = (G, _, playerKey, cardId) => {
  const player = G.players[playerKey];

  const alreadyProgrammedCard = player.commands[G.currentCommandKey];

  if (alreadyProgrammedCard) {
    player.hand.push(alreadyProgrammedCard);
  }

  const [playedCard] = remove(player.hand, (card) => card.id === cardId);

  player.commands[G.currentCommandKey] = playedCard;

  // INVALID MOVE
};

export const drawCard = (G, ctx, playerKey) => {
  const player = G.players[playerKey];

  if (player.commands[G.currentCommandKey] === null) {
    return INVALID_MOVE;
  }

  if (player.deck.length === 0) {
    player.deck = shuffle([...player.discardPile]);
    player.discardPile = [];
  }

  player.hand.push(player.deck.pop());

  if (
    every(G.players, (player) => player.commands[G.currentCommandKey] !== null)
  ) {
    if (G.currentCommandKey === 3) {
      ctx.events.endPhase();
    } else {
      G.currentCommandKey += 1;
    }
  }
  ctx.events.endTurn();

  // More Invalid moves?
};

export const skipTurn = (G, ctx) => {
  G.players[ctx.currentPlayer].commands[G.currentCommandKey] = null;
  ctx.events.endTurn();
};

export const removeGoal = (G, _, playerID, goalId) => {
  G.players[playerID].goals = G.players[playerID].goals.filter(
    (goal) => goal.id !== goalId
  );
};
