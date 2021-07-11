import some from "lodash/some";
import reduce from "lodash/reduce";
import get from "lodash/get";

import { POSITIVE, NEGATIVE } from "../constants";

const validMoveOnes = {
  0: [1, 3],
  1: [0, 2, 4],
  2: [1, 5],
  3: [0, 4, 6],
  4: [1, 3, 5, 7],
  5: [2, 4, 8],
  6: [3, 7],
  7: [6, 4, 8],
  8: [7, 5],
};

const validMoveTwos = {
  0: [2, 4, 6],
  1: [3, 5, 7],
  2: [0, 4, 8],
  3: [1, 5, 7],
  4: [0, 2, 6, 8],
  5: [1, 3, 7],
  6: [0, 4, 8],
  7: [1, 3, 5],
  8: [2, 4, 6],
};

export const isValidMove =
  (moveValidator) => (G, characterKey, locationKey) => {
    const destinationIndex = G.roomOrder.indexOf(locationKey);
    const originIndex = G.roomOrder.indexOf(
      G.characters[characterKey].location
    );

    return moveValidator[originIndex].includes(destinationIndex);
  };

export const isValidMoveOne = isValidMove(validMoveOnes);
export const isValidMoveTwo = isValidMove(validMoveTwos);

export const isValidChat = (G, characterOneKey, characterTwoKey) =>
  G.characters[characterOneKey].location ===
    G.characters[characterTwoKey].location &&
  characterOneKey !== characterTwoKey;

export const isReactEligible = (G, characterKey) => {
  const characterLocation = G.characters[characterKey].location;

  return some(
    G.rooms[characterLocation].drops,
    (drops, dropperKey) => dropperKey !== characterKey && drops.length > 0
  );
};

export const isValidReact = (G, roomKey, dropperCharKey, reactingCharKey) => {
  const characterRoom = G.rooms[roomKey];
  const reactingCharRoomKey = get(
    G.characters,
    [reactingCharKey, "location"],
    null
  );

  return (
    roomKey === reactingCharRoomKey &&
    characterRoom &&
    characterRoom.drops[dropperCharKey].length > 0 &&
    dropperCharKey !== reactingCharKey
  );
};

export const isChatEligible = (characters, characterKey) => {
  const characterLocation = characters[characterKey].location;

  return some(
    characters,
    (character, key) =>
      key !== characterKey && character.location === characterLocation
  );
};

const getPlayerScore = (scoredGoals) => {
  return scoredGoals.reduce((cumulativeScore, goal) => {
    return cumulativeScore + goal.score;
  }, 0);
};

const getScoredPlayerGoals = (G, player) => {
  return player.goals.map((goal) => {
    const relationship = G.relationships[goal.relationship];

    if (relationship.score > 0 && goal.polarity === POSITIVE) {
      return { ...goal, score: relationship.score };
    } else if (relationship.score < 0 && goal.polarity === NEGATIVE) {
      return { ...goal, score: Math.abs(relationship.score) };
    }
    return { ...goal, score: 0 };
  });
};

export const tallyScores = (G) => {
  return reduce(
    G.players,
    (scores, player, playerKey) => {
      const scoredGoals = getScoredPlayerGoals(G, player);
      const playerScore = getPlayerScore(scoredGoals);

      scores.push({ score: playerScore, playerID: playerKey, scoredGoals });

      return scores;
    },
    []
  );
};

export const getRelationship = (relationships, charKeyOne, charKeyTwo) =>
  relationships[`${charKeyOne}_${charKeyTwo}`]
    ? relationships[`${charKeyOne}_${charKeyTwo}`]
    : relationships[`${charKeyTwo}_${charKeyOne}`];

export const changeScore = (relationship, amount) => {
  if (relationship.score + amount > 5) {
    relationship.score = 5;
  } else if (relationship.score + amount < -5) {
    relationship.score = -5;
  } else {
    relationship.score += amount;
  }
};
