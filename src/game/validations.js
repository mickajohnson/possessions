import some from "lodash/some";
import reduce from "lodash/reduce";
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

export const isValidMove = (moveValidator) => (
  G,
  characterKey,
  locationKey
) => {
  const destinationIndex = G.roomOrder.indexOf(locationKey);
  const originIndex = G.roomOrder.indexOf(G.characters[characterKey].location);

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

  return (
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

const getPlayerScore = (G, player) => {
  return player.goals.reduce((score, goal) => {
    const relationship = G.relationships[goal.relationship];

    if (relationship.score > 0 && goal.polarity === POSITIVE) {
      return score + relationship.score;
    } else if (relationship.score < 0 && goal.polarity === NEGATIVE) {
      return score - relationship.score;
    }
    return score;
  }, 0);
};

export const tallyScores = (G) => {
  return reduce(
    G.players,
    (scores, player, playerKey) => {
      const playerScore = getPlayerScore(G, player);

      scores.push({ score: playerScore, playerId: playerKey });

      return scores;
    },
    []
  );
};
