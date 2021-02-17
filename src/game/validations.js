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

export const isValidMoveOne = (G, characterKey, locationKey) => {
  const destinationIndex = G.roomOrder.indexOf(locationKey);
  const originIndex = G.roomOrder.indexOf(G.characters[characterKey].location);

  return validMoveOnes[originIndex].includes(destinationIndex);
};

export const isValidReact = (G, reactorKey, reacteeKey) => {
  const characterRoom = G.rooms[G.characters[reactorKey].location];

  return (
    characterRoom.drops.some((drop) => drop.character !== reactorKey) &&
    characterRoom.drops.some((drop) => drop.character === reacteeKey)
  );
};

export const isValidChat = (G, characterOneKey, characterTwoKey) =>
  G.characters[characterOneKey].location ===
  G.characters[characterTwoKey].location;
