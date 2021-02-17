const validMoveOnes = {
  0: [1, 3],
  1: [0, 2, 4],
  2: [2, 5],
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
  G.characters[characterTwoKey].location;
