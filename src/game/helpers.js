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
